import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


const queryClient = new QueryClient()

function App(): JSX.Element {

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
