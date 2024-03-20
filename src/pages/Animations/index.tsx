import React, {useState, useEffect} from 'react';
import {View, Text, Animated} from 'react-native';
import animationsStyles from './styles';

export default function Animations() {
  const [dynamicWidth] = useState(new Animated.Value(150));
  const [dynamicHeight] = useState(new Animated.Value(50));

  useEffect(() => {
    Animated.timing(dynamicWidth, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [dynamicWidth]);

  return (
    <View style={animationsStyles(dynamicWidth, dynamicHeight).container}>
      <Animated.View
        style={animationsStyles(dynamicWidth, dynamicHeight).animatedView}>
        <Text style={animationsStyles(dynamicWidth, dynamicHeight).text}>
          Carregando...
        </Text>
      </Animated.View>
    </View>
  );
}
