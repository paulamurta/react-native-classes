import {NavigationProp} from '@react-navigation/native';

export type ScreenNames = ['Home', 'About'];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavProps = NavigationProp<RootStackParamList>;
