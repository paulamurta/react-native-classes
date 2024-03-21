import React, {useState, useEffect} from 'react';
import {View, Text, Animated} from 'react-native';
import animationsStyles from './styles';

export default function Animations() {
  const [whiteBoxWidth] = useState(new Animated.Value(100));
  const [whiteBoxHeight] = useState(new Animated.Value(50));
  const [whiteBoxOpacity] = useState(new Animated.Value(0));
  const [redBoxWidth] = useState(new Animated.Value(50));
  const animatedPercentage = redBoxWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  const styles = animationsStyles(
    whiteBoxWidth,
    whiteBoxHeight,
    whiteBoxOpacity,
    animatedPercentage,
  );

  useEffect(() => {
    //abre sequencia
    Animated.sequence([
      //comeca com um timing de opacidade 1
      Animated.timing(whiteBoxOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      //add na sequencia um parallel com 2 timings
      Animated.parallel([
        Animated.timing(whiteBoxWidth, {
          toValue: 300,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(whiteBoxHeight, {
          toValue: 150,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
      //finaliza com um timing de opacidade 0
      Animated.timing(whiteBoxOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      //fecha sequencia
    ]).start();
  }, []);

  useEffect(() => {
    //começa um loop
    Animated.loop(
      Animated.sequence([
        Animated.timing(redBoxWidth, {
          toValue: 80,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(redBoxWidth, {
          toValue: 50,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={styles.whiteBox}>
        <Text style={styles.text}>White Box Loading...</Text>
      </Animated.View>
      <Animated.View style={styles.redBox}>
        <Text style={styles.text}>Red Box Loading...</Text>
      </Animated.View>
    </View>
  );
}
