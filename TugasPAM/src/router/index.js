import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home';
import Bandara from '../pages/bandara';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Bandara"
        component={Bandara}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
