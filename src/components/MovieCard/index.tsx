import {Image, Pressable, Text, View} from 'react-native';
import {MovieCardProps} from './types';
import {movieCardStyle} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';

export default function MovieCard({nome, sinopse, foto}: MovieCardProps) {
  const [showText, setShowText] = useState<boolean>(false);

  return (
    <View style={movieCardStyle.card}>
      <Text style={movieCardStyle.title}>{nome}</Text>

      <View style={movieCardStyle.fotoWrapper}>
        <Image style={movieCardStyle.foto} source={{uri: foto}} />

        <Pressable
          onPress={() => setShowText(!showText)}
          style={movieCardStyle.btn}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['transparent', '#09A6FF']}
            style={movieCardStyle.gradient}>
            <Text style={movieCardStyle.btnTxt}>LEIA MAIS</Text>
          </LinearGradient>
        </Pressable>
      </View>

      {showText ? <Text style={movieCardStyle.text}>{sinopse}</Text> : null}
    </View>
  );
}
