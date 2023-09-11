import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../screens/AccountScreen';
import CardsScreen from '../screens/CardsScreen';
import RemoteScreen from '../screens/RemoteScreen';

export type MainStackParamList = {
  Account: undefined;
  Cards: undefined;
  Remote: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
        <Main.Navigator
          screenOptions={{
            // headerShown: false,
          }}>
          <Main.Screen name="Account" component={AccountScreen} />
          <Main.Screen name="Cards" component={CardsScreen} />
          <Main.Screen name="Remote" component={RemoteScreen} />
        </Main.Navigator>
  );
};

export default MainNavigator;
