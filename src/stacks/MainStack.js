import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ViewButton from '../screen/ViewButton/ViewButton';
import ViewResults from '../screen/ViewResults/ViewResults';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName='ViewButton'>
    <Stack.Screen name='ViewButton' component={ViewButton} />
    <Stack.Screen name='ViewResults' component={ViewResults} />
  </Stack.Navigator>
);
