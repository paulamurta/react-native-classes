import Home from '../pages/Home';
import About from '../pages/About';
import {NavigationContainer} from '@react-navigation/native';
import Animations from '../pages/Animations';
import Feed from '../pages/Feed';
import Instagram from '../pages/Instagram';
import Movies from '../pages/Movies';
import Pizza from '../pages/Pizza';
import AsyncStoragePage from '../pages/AsyncStoragePage';

import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';

// const Stack = createStackNavigator();
const RootStack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: '',
          headerShown: false,
        }}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="About" component={About} />
        <RootStack.Screen name="Animations" component={Animations} />
        <RootStack.Screen
          name="AsyncStoragePage"
          component={AsyncStoragePage}
        />
        <RootStack.Screen name="Feed" component={Feed} />
        <RootStack.Screen name="Instagram" component={Instagram} />
        <RootStack.Screen name="Movies" component={Movies} />
        <RootStack.Screen name="Pizza" component={Pizza} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
