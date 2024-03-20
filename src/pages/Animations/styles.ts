import {Animated, StyleSheet} from 'react-native';

const animationsStyles = (
  whiteBoxWidth: Animated.Value,
  whiteBoxHeight: Animated.Value,
  whiteBoxOpacity: Animated.Value,
  redBoxWidth: Animated.Value,
  redBoxHeight: Animated.Value,
  redBoxOpacity: Animated.Value,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },
    whiteBox: {
      width: whiteBoxWidth,
      height: whiteBoxHeight,
      backgroundColor: 'white',
      justifyContent: 'center',
      opacity: whiteBoxOpacity,
    },
    redBox: {
      width: redBoxWidth,
      height: redBoxHeight,
      backgroundColor: 'indianred',
      justifyContent: 'center',
      opacity: redBoxOpacity,
    },
    text: {
      color: 'black',
      fontSize: 20,
      textAlign: 'center',
    },
  });

export default animationsStyles;
