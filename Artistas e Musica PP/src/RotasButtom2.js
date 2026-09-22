import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Bad from './src_musica/Bad';
import Oceanman from './src_musica/Oceanman';
import Onlyinohio from './src_musica/Onlyinohio';
import Rockwyou from './src_musica/Rockwyou'
import S_criminal from './src_musica/S_criminal';
import Musica from './src_pages/Musica'

const Stack = createStackNavigator();

export default function RotasButtom2(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Musica" component={Musica} options={{headerShown:false}}/>
      <Stack.Screen name="Bad" component={Bad} options ={{title:"Bad"}}/>
      <Stack.Screen name="Oceanman" component={Oceanman} options ={{title:"Ocean Man"}}/>
      <Stack.Screen name="Onlyinohio" component={Onlyinohio} options ={{title:"Only in Ohio"}}/>
      <Stack.Screen name="Rockwyou" component={Rockwyou} options ={{title:"Rock with You"}}/>
      <Stack.Screen name="S_criminal" component={S_criminal} options ={{title:"Smooth Criminal"}}/>
    </Stack.Navigator>
  );
}