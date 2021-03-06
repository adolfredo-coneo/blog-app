import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider as BlogProvider } from './src/context/BlogProvider';
import IndexScreen, { homeHeaderOptions } from './src/screens/IndexScreen';
import ShowScreen, { showHeaderOptions } from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { RootStackParamList } from './src/models/Screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={IndexScreen}
            options={homeHeaderOptions}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={showHeaderOptions}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
