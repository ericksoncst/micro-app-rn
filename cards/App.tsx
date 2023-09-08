/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  Button
} from 'react-native';


function App(props): JSX.Element {

  return (
    <SafeAreaView>
      <Text>Welcome to cards</Text>
      <Button title='Go to account' onPress={() => props.navigation.goBack()} />
    </SafeAreaView>
  );
}

export default App;
