import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Header from './components/header'

import HomeScreen from './screens/home';
import SeasonScreen from './screens/season';
import MenuScreen from './screens/menu';
import PilotsScreen from './screens/pilots';
import ClassificationMenu from './screens/classification';
import Classification from './screens/classification/classifications';
import { View, Image, StyleSheet, Text } from 'react-native';

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
                headerTitle: <Header title={"Temporadas"} showImage={true} />
              } 
            } 
        />
        <Stack.Screen 
          name="Season" 
          component={ SeasonScreen } 
          options={ 
            { 
              headerTitle: <Header title={"Corridas"} showImage={false} />
            } 
          } 
          />
        <Stack.Screen name="Menu" component={ MenuScreen } />
        <Stack.Screen 
          name="Pilots" 
          component={ PilotsScreen } 
          options={ 
            { 
              headerTitle: <Header title={"Pilotos"} showImage={false} />
            } 
          } 
          />
        <Stack.Screen 
          name="ClassificationMenu" 
          component= { ClassificationMenu } 
          options={ 
            { 
              headerTitle: <Header title={"Corridas"} showImage={false} />
            } 
          } 
          />
        <Stack.Screen 
          name="Classification" 
          component= { Classification } 
          options={ 
            { 
              headerTitle: <Header title={"Classificação"} showImage={false} />
            } 
          } 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}