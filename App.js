import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Header from './components/header'

import HomeScreen from './screens/home';
import SeasonScreen from './screens/season';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={ HomeScreen } 
            options={ 
              { 
                headerTitle: <Header/>
              } 
            } 
        />
        <Stack.Screen name="Season" component={ SeasonScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}