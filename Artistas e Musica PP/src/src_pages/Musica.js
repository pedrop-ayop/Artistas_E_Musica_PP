import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Musica(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Musicas do Século!</Text>

      <FlatList
        data={musicas}
        renderItem={({ item }) => (
          <View style={estilo.musica}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(item.buttom);
              }}>
              <View style={estilo.txtMusica}></View>
              <Text style={estilo.txtMusica}> {item.nome}</Text>
            </TouchableOpacity>
            <View style={estilo.rede}>
              <Text style={estilo.curtidas}>
                <MaterialCommunityIcons
                  name="thumb-up"
                  size={20}
                  color={'#F00'}
                />
                {item.like} Curtidas
              </Text>
              <Text style={estilo.seguidores}>
                <MaterialCommunityIcons
                  name="account-heart"
                  size={20}
                  color={'blue'}
                />
                {item.seguidores} Seguidores
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const musicas = [
  {
    uid: 1,
    nome: 'Bad',
    like: 4756,
    seguidores: 88923,
    buttom: 'Bad',
  },
  {
    uid: 2,
    nome: 'Ocean Man',
    like: 7237,
    seguidores: 854945,
    buttom: 'Oceanman',
  },
  {
    uid: 3,
    nome: 'Only in Ohio',
    like: 96958,
    seguidores: 959858659,
    buttom: 'Onlyinohio',
  },
  {
    uid: 4,
    nome: 'Rock With You',
    like: 457546785,
    seguidores: 2342367,
    buttom: 'Rockwyou',
  },
  {
    uid: 5,
    nome: 'Smooth Criminal',
    like: 333333,
    seguidores: 2222222,
    buttom: 'S_criminal',
  },
];

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4d2f7',
  },
  musica: {
    backgroundColor: '#a2f5e9',
    justifyContent: 'center',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 700,
    marginVertical: 30,
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtMusica: {
    fontSize: 20,
  },
});
