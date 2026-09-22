import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Beatles() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Os Beatles</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/artista/beatles1.png')}
              />
              <Text style={estilo.rotulo}> Beatles no seu Inicio! </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/artista/beatles2.png')}
              />
              <Text style={estilo.rotulo}> O albúm Classico! </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/artista/beatles3.png')}
              />
              <Text style={estilo.rotulo}> Seus últimos anos </Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            Os Beatles foram a maior e mais influente banda de rock da história,
            formada em Liverpool, Inglaterra, em 1960.O lendário quarteto era
            composto por John Lennon (vocal e guitarra), Paul McCartney (vocal e
            baixo), George Harrison (guitarra) e Ringo Starr (bateria). Juntos,
            eles revolucionaram a cultura pop nos anos 1960, liderando a chamada
            "Invasão Britânica" e transformando o estúdio de gravação em um
            espaço de experimentação artística com álbuns icônicos como Sgt.
            Pepper's Lonely Hearts Club Band e Abbey Road.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4d2f7'
  },
  img: {
    width: 330,
    height: 400,
    marginHorizontal: 25,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fffff',
    fontWeight: 700,
    marginTop: 50,
    marginBottom: 30,
  },
  rotulo: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  resumo: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#ffffff70',
    borderRadius: 7,
    padding: 8, 
  },
  textoResumo: {
    fontSize: 19,
  }
})
