import {StyleSheet, View} from 'react-native';
import {animationsStyles} from './styles';
import {useState} from 'react';

export default function Animations() {
  const [dynamicWidth, setDynamicWidth] = useState<number>(250);
  const [dynamicHeight, setDynamicHeight] = useState<number>(250);

  return (
    <View style={animationsStyles.container}>
      <View style={animationsStyles.wrapper}></View>
    </View>
  );
}

// const animationsStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   wrapper: (dynamicWidth: number) => ({
//     width: dynamicWidth,
//     backgroundColor: 'darkblue',
//   }),
//   flatlistContent: {
//     gap: 30,
//     width: '100%',
//     padding: 20,
//   },
// });
