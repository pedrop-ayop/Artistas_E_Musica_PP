import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function S_criminal(){

  const letra= `Aaow!
Tcha!
Shoo-cha-choo-cha!
Tcha!

As he came into the window
Was a sound of a crescendo
He came into her apartment
He left the bloodstains on the carpet

She ran underneath the table
He could see she was unable
So she ran into the bedroom
She was struck down, it was her doom

Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?

Annie, are you okay?
Will you tell us that you're okay?
There's a sign at the window
Then he struck you, a crescendo, Annie

He came into your apartment
He left the bloodstains on the carpet
Then you ran into the bedroom
You were struck down, it was your doom

Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?

You've been hit by
You've been hit by
A smooth criminal

Aaow!

So they came into the outway
It was Sunday, what a black day
Every time I tried to find him
There were no clues, they’re behind him
And they end up never knowing
Who’s the suspect or what to expect
Mouth-to-mouth resuscitation
Sounding heartbeats, intimidations

Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Annie, are you okay?

Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?

You've been hit by
You've been struck by
A smooth criminal

Aaow!

Annie, are you okay?
Will you tell us that you're okay?
There's a sound at the window
Then he struck you, a crescendo, Annie

He came into your apartment
Left the bloodstains on the carpet
And then you ran into the bedroom
You were struck down
It was your doom, Annie

Aaow!
Hoo!
Aaow!
Hoo!
Hoo!
Aaow!

Annie, are you okay?
Are you okay, Annie?

Annie, are you okay? (I don't know)
Will you tell us that you're okay? (I don't know)
There's a sound at the window (I don't know)
Then he struck you, a crescendo, Annie (I don't know)

He came into your apartment (I don't know)
Left bloodstains on the carpet (I don't know why, baby)
And then you ran into the bedroom (help me)
You were struck down
It was your doom, Annie (dag gone it)

Annie are you okay? (Dag gone it, baby)
Will you tell us that you're okay? (Dag gone it, baby)
There's a sound at the window (dag gone it, baby)
Then he struck you, a crescendo, Annie (hoo! Hoo!)

He came into your apartment (dag gone it)
Left bloodstains on the carpet (hoo!)
And then you ran into the bedroom (hoo! Hoo!)
You were struck down (dag gone it)
It was your doom, Annie (aaow!)

Annie, are you okay? (I don't know)
Will you tell us that you're okay? (I don't know)
There's a sound at the window (I don't know)
Then he struck you, a crescendo, Annie (I don't know)

He came into your apartment (I don't know)
Left bloodstains on the carpet (I don't know why, baby)
And then you ran into the bedroom (help me)
You were struck down
It was your doom, Annie (dag gone it)

Annie are you okay? (Dag gone it, baby)
Will you tell us that you're okay? (Dag gone it, baby)
There's a sound at the window (dag gone it, baby)
Then he struck you, a crescendo, Annie (hoo! Hoo!)

He came into your apartment (dag gone it)
Left bloodstains on the carpet (hoo!)
And then you ran into the bedroom (hoo! Hoo!)
You were struck down (dag gone it)
It was your doom, Annie (aaow!)

Annie, are you okay? (I don't know)
Will you tell us that you're okay? (I don't know)
There's a sound at the window (I don't know)
Then he struck you, a crescendo, Annie (I don't know)

He came into your apartment (I don't know)
Left bloodstains on the carpet (I don't know why, baby)
And then you ran into the bedroom (help me)
You were struck down
It was your doom, Annie (dag gone it)

Annie are you okay? (Dag gone it, baby)
Will you tell us that you're okay? (Dag gone it, baby)
There's a sound at the window (dag gone it, baby)
Then he struck you, a crescendo, Annie (hoo! Hoo!)

He came into your apartment (dag gone it)
Left bloodstains on the carpet (hoo!)
And then you ran into the bedroom (hoo! Hoo!)
You were struck down (dag gone it)
It was your doom, Annie (aaow!)

Compositores: Michael Jackson
`;
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Smooth Criminal </Text>

        <Text style={estilo.subtitulo}>
          Michael Jackson
        </Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/musica/bad.png')}
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

