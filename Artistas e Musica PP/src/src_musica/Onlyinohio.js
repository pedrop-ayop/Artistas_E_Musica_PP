import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Onlyinohio(){

  const letra= `Only in Ohio, oh, oh
Only in Ohio, oh
Only in Ohio, oh, oh
Only in Ohio, oh

Hey, I heard you wanna see Ohio
If I were you, I would maybe think twice though
'Cause I’ve been livin’ out here for a mighty long time
And it ain’t a great home, here’s why bro
Yeah, it may be the home of LeBron James
But he left before it all went down into flames
'Cause sticks and stones break no bones
And the rain here melts my clothes

You can’t even sleep
You can’t even go to school
You can’t even swim with the sharks in the pool
You can’t even touch grass
You can’t even go back home once you’re in Ohio

Only in Ohio, oh, oh
Only in Ohio, oh
Only in Ohio, oh, oh
Only in Ohio, oh

If you want to talk to the tomatoes
If you want a murder drone comin’ by your home
Then you’re gonna wanna stay for a while

Where the fire feels cold
Michael Jackson grows old
Where your daddy went to go get milk
Ain’t nobody you can call
You can’t even call Saul
We’re all being held against our will

No American dream, it’s a nightmare
Moon by day, and the Sun in the night air
My bro Jamal, he ballin’ with a white bear
Tweakin’ with the light stare, mans don’t fight fair

Make an onion cry
All the clouds are on the floor
Fishes in the sky
There’s an alien at your door
We live in a lie
Nothing here is real for sure
Don’t let intrusive thoughts win anymore

Only in Ohio, oh, oh
Only in Ohio, oh
Only in Ohio, oh, oh
Only in Ohio, oh

We set our own standard
We leave all questions unanswered
You can’t even comprehend it
Just read up on ye olde Reddit
(Get it?)
We set our own standard
We leave all questions unanswered
You can’t even comprehend it
Someone help me find the exit!

You can’t even sleep
You can’t even go to school
You can’t even swim with the sharks in the pool
You can’t even touch grass
You can’t even go back home
When you’re bing chilling in Ohio

Only in Ohio, oh, oh
Only in Ohio, oh
Only in Ohio, oh, oh
Only in Ohio, oh

Only in Ohio, oh, oh
Only in Ohio, oh
Only in Ohio, oh, oh
Only in Ohio, oh

I'll bet before you know it
This whole world will be taken over
By Ohio!
Only in Ohio, oh

Compositores: Charles Duncan Green (CG5)
`;
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Only in Ohio </Text>

        <Text style={estilo.subtitulo}>
          CG5
        </Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/musica/onlyinohio.jpg')}
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

