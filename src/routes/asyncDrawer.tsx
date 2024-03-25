import Pizza from '../pages/Pizza';
import AsyncStoragePage from '../pages/AsyncStoragePage';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function AsyncDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {backgroundColor: '#252525'},
        drawerInactiveTintColor: '#6e6e6e',
        drawerActiveTintColor: '#ffffff',
      }}>
      <Drawer.Screen name="AsyncStoragePage" component={AsyncStoragePage} />
      <Drawer.Screen name="Pizza" component={Pizza} />
    </Drawer.Navigator>
  );
}
