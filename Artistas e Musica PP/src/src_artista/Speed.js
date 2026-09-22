import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Speed() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>IShowSpeed</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/artista/speed1.png')}
              />
              <Text style={estilo.rotulo}>
                {' '}
                Performance da música Champions, Copa do mundo 2026.{' '}
              </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/artista/speed2.png')}
              />
              <Text style={estilo.rotulo}> Foto do speed. </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/artista/speed3.png')}
              />
              <Text style={estilo.rotulo}>
                {' '}
                Foto do evento The Streamer Awards{' '}
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            IShowSpeed transformou sua fama como streamer em uma carreira
            musical de sucesso, misturando hip-hop, trap e funk em faixas
            energéticas que viralizaram globalmente.Ele estreou com o hit
            "Shake" em 2021, que superou 200 milhões de visualizações no
            YouTube, e consolidou seu impacto no esporte com o hino "World Cup"
            em 2022. Sua forte conexão com o Brasil resultou no EP Trip 2 Brazil
            (2024), uma colaboração de funk carioca com MC Kevin o Chris. O auge
            de sua trajetória artística aconteceu ao se apresentar na cerimônia
            de encerramento da Copa do Mundo de 2026, coroando sua transição de
            criador de conteúdo para o cenário musical internacional.
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
