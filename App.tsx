import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BlogProvider from './src/context/BlogProvider';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const blogPosts = [
    {
      id: 1,
      title: 'Apple Introduces WWDC',
      content:
        'Apple has announced that it will be hosting the WWDC conference in San Francisco on June 18th, 2020.',
    },
    {
      id: 2,
      title: 'Google Introduces I/O',
      content:
        'Google has announced that it will be hosting the I/O conference in San Francisco on June 18th, 2020.',
    },
  ];

  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={IndexScreen} />
          <Stack.Screen name="Show" component={ShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
