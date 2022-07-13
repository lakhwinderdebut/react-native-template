import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppScreens} from '../screens/Constants';

import HomeScreen from '../screens/home/index';
import AboutScreen from '../screens/about/index';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppScreens.Root}
        component={Root}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function Root() {
  return (
    <Drawer.Navigator initialRouteName={AppScreens.Home}>
      {this.getDrawerItem(AppScreens.Home, HomeScreen, AppScreens.Home, true)}
      {this.getDrawerItem(
        AppScreens.About,
        AboutScreen,
        AppScreens.About,
        true,
      )}
    </Drawer.Navigator>
  );
}

getDrawerItem = (name, component, iconName, lazy = false) => {
  return (
    <Drawer.Screen
      name={name}
      component={component}
      options={{
        unmountOnBlur: lazy,
        drawerIcon: ({focused, color, size}) => (
          <MaterialCommunityIcons name={iconName} color={color} size={size} />
        ),
      }}
    />
  );
};

export default AppNavigator;
