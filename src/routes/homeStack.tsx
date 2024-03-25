import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import About from '../pages/About';
import Details from '../pages/Details';

const Stack = createStackNavigator();
// const Stack = createStackNavigator<StackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
