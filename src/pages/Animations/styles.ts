import {Animated, StyleSheet} from 'react-native';

const animationsStyles = (
  dynamicWidth: Animated.Value,
  dynamicHeight: Animated.Value,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    animatedView: {
      width: dynamicWidth,
      height: dynamicHeight,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    text: {
      color: 'black',
      fontSize: 20,
      textAlign: 'center',
    },
  });

export default animationsStyles;
