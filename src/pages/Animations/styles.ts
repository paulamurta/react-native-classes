import {Animated, DimensionValue, StyleSheet} from 'react-native';

const animationsStyles = (
  whiteBoxWidth: Animated.Value,
  whiteBoxHeight: Animated.Value,
  whiteBoxOpacity: Animated.Value,
  animatedPercentage: DimensionValue,
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
      width: animatedPercentage,
      height: 35,
      backgroundColor: 'indianred',
      justifyContent: 'center',
    },
    text: {
      color: 'black',
      fontSize: 20,
      textAlign: 'center',
    },
  });

export default animationsStyles;
