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
     <Text>
      Welcome to account
     </Text>
     <Button title='Go to cards' onPress={() => props.navigation.navigate(`Cards`)} />
    </SafeAreaView>
  );
}

export default App;
