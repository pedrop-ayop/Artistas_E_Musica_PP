import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Michaeljackson() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Michael Jackson: O rei do pop</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/artista/mj1.png')}
              />
              <Text style={estilo.rotulo}>
                {' '}
                Íconica Foto de Michael Jackson, Na World Bad Tour{' '}
              </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/artista/mj2.png')}
              />
              <Text style={estilo.rotulo}>
                {' '}
                O albúm mais vendido da história da música! Thriller{' '}
              </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/artista/mj3.png')}
              />
              <Text style={estilo.rotulo}> Foto usada no albúm Bad </Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            Michael Jackson (1958–2009), o Rei do Pop, começou a carreira na
            infância com o grupo Jackson 5.Em carreira solo, revolucionou a
            música e a dança com o álbum Thriller (1982), o mais vendido da
            história, popularizando o passo moonwalk antes de sua morte em 2009.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4d2f7',
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
  },
});
