import Pizza from '../pages/Pizza';
import AsyncStoragePage from '../pages/AsyncStoragePage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function AsyncDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerStyle: {backgroundColor: '#ffffff'},
        drawerActiveBackgroundColor: '#00dae4',
        drawerInactiveTintColor: '#6e6e6e',
        drawerActiveTintColor: '#ffffff',
      }}>
      <Drawer.Screen name="AsyncStoragePage" component={AsyncStoragePage} />
      <Drawer.Screen name="Pizza" component={Pizza} />
    </Drawer.Navigator>
  );
}
