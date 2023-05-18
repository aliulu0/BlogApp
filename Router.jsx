import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {BlogProvider} from './src/context/blogContext';
import Detail from './src/pages/Detail/Detail';
import BlogList from './src/pages/BlogList/BlogList';
const Stack = createStackNavigator();

function Router() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BlogScreen"
            component={BlogList}
            options={{
              title: 'Blog',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#212A3E',
              },
              headerTintColor: '#F1F6F9',
            }}
          />
          <Stack.Screen
            name="DetailScreen"
            component={Detail}
            options={{
              title: 'Detail',
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
