import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Artista(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Artistas do Século!</Text>

      <FlatList
        data={artistas}
        renderItem={({ item }) => (
          <View style={estilo.artista}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(item.buttom);
              }}>
              <View style={estilo.txtartista}></View>
              <Text style={estilo.txtartista}> {item.nome}</Text>
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

const artistas = [
  {
    uid: 1,
    nome: 'Beatles',
    like: 3345,
    seguidores: 18245,
    buttom: 'Beatles'
  },
  {
    uid: 2,
    nome: 'Michael Jackson',
    like: 30465,
    seguidores: 883596,
    buttom: 'Michaeljackson'
  },
  {
    uid: 3,
    nome: 'Queen',
    like: 4756,
    seguidores: 88923,
    buttom: 'Queen'
  },
  {
    uid: 4,
    nome: 'Speed',
    like: 8375,
    seguidores: 2384209,
    buttom: 'Speed'
  },
];

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4d2f7',
  },
  artista: {
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
  txtartista: {
    fontSize: 20,
  },
});
