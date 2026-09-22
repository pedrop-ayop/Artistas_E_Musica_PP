import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Rockwyou(){

  const letra= `Girl, close your eyes
Let that rhythm get into you
Don't try to fight it
There ain't nothin' that you can do
Relax your mind
Lay back and groove with mine

You gotta feel that heat
And we can ride the boogie
Share that beat of love

I wanna rock with you (all night)
Dance you into day (sunlight)
I wanna rock with you (all night)
We're gonna rock the night away (rock, right)

Out on the floor
There ain't nobody there but us
Girl, when you dance
There's a magic that must be love
Just take it slow
'Cause we got so far to go

When you feel that heat
And we gonna ride the boogie
(Share that beat) share that beat of love

I wanna rock with you (all night)
Dance you into day (sunlight)
I wanna rock with you (all night)
We gon' rock the night away

And when the groove is dead and gone (yeah)
You know that love survives
So we can rock forever on
I wanna rock with you
I wanna groove with you

Wanna rock (all night)
With you, girl (sunlight)
Rock with you, rock with you, girl, yeah (all night)
Dance the night away
I wanna rock with you, yeah (all night)
Rock you into day (sunlight)
I wanna rock with you (all night)
Rock the night away (rock, right)

Feel the heat, feel the beat (all night)
Rock you into day (sunlight)
I wanna rock (all night)
Rock the night away

Compositores: Michael Jackson, Rod Temperton (Rodney Lynn Temperton)
`;
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Rock with you </Text>

        <Text style={estilo.subtitulo}>
          Michael Jackson
        </Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/musica/offthewall.png')}
              />
            </View>
          
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            {letra}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#a4d2f7',
    paddingBottom: 30
  },

  titulo:{
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 10
  },

  subtitulo:{
    fontSize: 20,
    textAlign: 'center',
    color: '#1f3fb7',
    marginBottom: 20,
  },

  resumo:{
    marginHorizontal: 15,
    backgroundColor: '#ffffff70',
    borderRadius: 7,
    padding: 12,
  },

  textoResumo:{
    fontSize: 19,
    lineHeight: 32,
    color: '#222'
  },
  img: {
    width: 370,
    height: 370,
    marginHorizontal: 25,
    borderRadius: 10,
    textAlign: 'center',
  }
})

