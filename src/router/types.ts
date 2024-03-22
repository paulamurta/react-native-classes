import {NavigationProp} from '@react-navigation/native';

export type ScreenNames = [
  'Home',
  'About',
  'Animations',
  'AsyncStoragePage',
  'Feed',
  'Instagram',
  'Movies',
  'Pizza',
];

export type RootStackParamList = {
  Home: undefined;
  About: {name: string; email: string} | undefined;
  Animations: undefined;
  AsyncStoragePage: undefined;
  Feed: undefined;
  Instagram: undefined;
  Movies: undefined;
  Pizza: undefined;
};

// Specifying undefined means that the route doesn't have params. A union type with undefined (e.g. SomeType | undefined) means that params are optional.

export type StackTypes = NavigationProp<RootStackParamList>;
