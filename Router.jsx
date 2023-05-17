import React from 'react';
import Home from './src/pages/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Blog"
          component={Home}
          options={{
            headerTitleAlign: 'center',
            headerStyle:{
              backgroundColor:"#212A3E",
            },
            headerTintColor: "#F1F6F9",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
