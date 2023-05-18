import React from 'react';
import Home from './src/pages/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {BlogProvider} from './src/context/blogContext';
const Stack = createStackNavigator();

function Router() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Blog"
            component={Home}
            options={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#212A3E',
              },
              headerTintColor: '#F1F6F9',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

export default Router;
