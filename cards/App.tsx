import React from 'react';
import {
  SafeAreaView,
  Text,
  Button
} from 'react-native';
import { useQuery } from 'react-query'
import { getRepoData } from '../services/index'


function App(props): JSX.Element {


  const { isLoading, error, data } = useQuery('repoData', getRepoData)

if (isLoading) return <Text>
Loading data ...
</Text>

  return (
    <SafeAreaView>
      <Text>Welcome to cards</Text>
      <Button title='Go to account' onPress={() => props.navigation.goBack()} />
      <Button title='Go to Remote Screen' onPress={() => props.navigation.navigate('Remote')} />
      <Text>{data?.forks_count}</Text>

    </SafeAreaView>
  );
}

export default App;
