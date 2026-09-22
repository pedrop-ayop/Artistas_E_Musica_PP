import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Queen() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Queen</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/artista/queen1.png')}
              />
              <Text style={estilo.rotulo}> Foto do albúm The Miracle </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/artista/queen2.png')}
              />
              <Text style={estilo.rotulo}> Foto do albúm Queen II </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/artista/queen3.png')}
              />
              <Text style={estilo.rotulo}> Foto da banda </Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            O Queen foi uma das maiores bandas do rock mundial, formada em
            Londres em 1970 e eternizada por sua mistura única de rock com ópera
            e hinos de estádio.O grupo se destacava pelo talento coletivo de
            seus quatro integrantes, já que todos eram compositores de mega
            sucessos: o vocalista Freddie Mercury, dono de uma voz e presença de
            palco lendárias e autor de "Bohemian Rhapsody"; o guitarrista Brian
            May, que construiu a própria guitarra e compôs "We Will Rock You"; o
            baterista Roger Taylor, responsável pelo ritmo enérgico e pela faixa
            "Radio Ga Ga"; e o baixista John Deacon, o membro mais reservado que
            criou a icônica linha de baixo de "Another One Bites the Dust".
            Juntos, eles atingiram o ápice com a histórica apresentação no
            festival Live Aid em 1985 e, mesmo após a morte de Freddie em 1991,
            o legado da banda continua vivo e influenciando gerações até hoje.
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
