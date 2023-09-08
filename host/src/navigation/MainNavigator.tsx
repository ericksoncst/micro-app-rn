import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../screens/AccountScreen';
import CardsScreen from '../screens/CardsScreen';

export type MainStackParamList = {
  Account: undefined;
  Cards: undefined;
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
        </Main.Navigator>
  );
};

export default MainNavigator;
