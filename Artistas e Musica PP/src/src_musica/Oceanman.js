import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Oceanman(){

  const letra= `Ocean man, take me by the hand, lead me to the land that you understand
Ocean man, the voyage to the corner of the globe is a real trip
Ocean man, the crust of a tan man embibed by the sand
Soaking up the thirst of the land

Ocean man, can you see through the wonder of amazement at the oberman
Ocean man, the crust is elusive when it casts forth to the childlike man
Ocean man, the sequence of a life form braised in the sand
Soaking up the thirst of the land

Ocean man
Ocean man
Ocean man

Ocean man, take me by the hand
Lead me to the land that you understand
Ocean man, the voyage to the corner of the globe
Is a real trip, trip, trip, trip, trip, trip, trip, trip
Ocean man, the crust of a tan man embibed by the sand
Soaking up the thirst of the land

Ocean man, can you see through the wonder of amazement at the oberman
Ocean man, the crust is elusive when it casts forth to the childlike man
Ocean man, the sequence of a life form braised in the sand
Soaking up the thirst of the land

Ocean man

Compositores: Dean Ween (Michael Melchiondo), Gene Ween (Aaron Freeman)
`;
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Ocean Man </Text>

        <Text style={estilo.subtitulo}>
          Ween
        </Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/musica/ween.png')}
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

