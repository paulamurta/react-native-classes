import Feed from '../pages/Feed';
import Movies from '../pages/Movies';
import Instagram from '../pages/Instagram';
import Animations from '../pages/Animations';
import Feather from 'react-native-vector-icons/Feather';
import HomeStack from './homeStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AsyncTab from './asyncDrawer';
import AsyncDrawer from './asyncDrawer';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarStyle: {backgroundColor: '#2a2727'},
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Feather name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Animations"
        component={Animations}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="play" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="AsyncStorage"
        component={AsyncDrawer}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="clock" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="user" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Instagram"
        component={Instagram}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="instagram" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="film" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
