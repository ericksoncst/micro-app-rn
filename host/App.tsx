/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View, Button} from 'react-native';

import {Federated} from '@callstack/repack/client';

const Cards = React.lazy(() => Federated.importModule('cards', './App'));
const Account = React.lazy(() => Federated.importModule('account', './App'));

function App(): JSX.Element {

  const [visibleApp, setVisibleApp] = useState<string>('');

  const renderRelevantApp = () => {
    switch (visibleApp) {
      case 'cards':
        return (
          <View style={styles.miniAppWrapper}>
            <React.Suspense fallback={<Text>Loading cards...</Text>}>
              <Cards />
            </React.Suspense>
          </View>
        );
      case 'account':
        return (
          <View style={styles.miniAppWrapper}>
            <React.Suspense fallback={<Text>Loading account...</Text>}>
              <Account />
            </React.Suspense>
          </View>
        );
      default:
        return (
          <SafeAreaView>
            <StatusBar />
            <View style={styles.mainContainer}>
              <Button title="Acount" onPress={() => setVisibleApp('account')} />
              <Button title="Cards" onPress={() => setVisibleApp('cards')} />
            </View>
          </SafeAreaView>
        );
    }
  };

  const renderBackToHome = () => {
    if (visibleApp) {
      return (
        <View style={styles.backWrapper}>
          <Button title="<- Back To Home" onPress={() => setVisibleApp('')} />
        </View>
      );
    }
  };

  return (
    <View>
      {renderBackToHome()}
      {renderRelevantApp()}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  miniAppWrapper: {
    // flex:1,
  },
  backWrapper: {
    backgroundColor: '#E1F8DC',
    marginTop: 50,
  },
});

export default App;
