import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Beatles from './src_artista/Beatles.js'
import MichaelJackson from './src_artista/Michaeljackson.js'
import Queen from './src_artista/Queen.js'
import Speed from './src_artista/Speed.js'
import Artista from './src_pages/Artista'

const Stack = createStackNavigator();

export default function RotasButtom(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Artistas" component={Artista} options={{headerShown:false}}/>
      <Stack.Screen name="Beatles" component={Beatles} options ={{title:"Beatles"}}/>
      <Stack.Screen name="Michaeljackson" component={MichaelJackson} options ={{title:"Michael Jackson"}}/>
      <Stack.Screen name="Queen" component={Queen} options ={{title:"Queen"}}/>
      <Stack.Screen name="Speed" component={Speed} options ={{title:"IShowSpeed"}}/>
    </Stack.Navigator>
  );
}

