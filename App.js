import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/header'

import HomeScreen from './screens/home';
import SeasonScreen from './screens/season';
import MenuScreen from './screens/menu';
import PilotsScreen from './screens/pilots';
import ClassificationMenu from './screens/classification';
import Classification from './screens/classification/classifications';
import Constructors from './screens/constructors'
import PilotsWinners from './screens/driverStandings'
import ConstructorsWinners from './screens/constructorStandings'
import AllWinners from './screens/allWinners'
import AllPilotsWinners from './screens/allWinners/allPilots'
import AllConstructorsWinners from './screens/allWinners/allConstructors'


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
              headerTitle: <Header title={"Corridas"} />
            } 
          } 
        />
        <Stack.Screen name="Menu" component={ MenuScreen } />
        <Stack.Screen 
          name="Pilots" 
          component={ PilotsScreen } 
          options={ 
            { 
              headerTitle: <Header title={"Pilotos"} />
            } 
          } 
        />
        <Stack.Screen 
          name="Constructors" 
          component={ Constructors } 
          options={
            {
              headerTitle: <Header title={"Equipes"} />
            }
          }
        />
        <Stack.Screen 
          name="ClassificationMenu" 
          component= { ClassificationMenu } 
          options={ 
            { 
              headerTitle: <Header title={"Corridas"} />
            } 
          } 
        />
        <Stack.Screen 
          name="Classification" 
          component= { Classification } 
          options={ 
            { 
              headerTitle: <Header title={"Classificação"} />
            } 
          } 
        />
        <Stack.Screen 
          name="PilotsWinners"
          component={ PilotsWinners }
          options={
            {
              headerTitle: <Header title={"Pontuações dos Pilotos"} />
            }
          }
        />
        <Stack.Screen
          name="ConstructorsWinners"
          component={ ConstructorsWinners }
          options={
            {
              headerTitle: <Header title={"Pontuações das Equipes"} />
            }
          }
        />
        <Stack.Screen 
          name="AllWinners"
          component={ AllWinners }
          options={
            {
              headerTitle: <Header title={"Campeões de Todos os Tempos"} />
            }
          }
        />
        <Stack.Screen
          name="AllPilotsWinners"
          component={ AllPilotsWinners }
          options={
            {
              headerTitle: <Header title={"Pilotos Campeões."} />
            }
          }
        />
        <Stack.Screen 
        name="AllConstructorsWinners"
        component={ AllConstructorsWinners }
        options={
          {
            headerTitle: <Header title={"Equipes Campeãs"} />
          }
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}