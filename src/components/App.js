import React from 'react';
import PacientList from './PacientList';
import {Text, View, Dimensions, ScrollView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

const {width} = Dimensions.get('window');

const CustomDrawerNavigation = props => {
  return (
    <SafeAreaView style={{flex: 1, zIndex: 999}}>
      <ScrollView>
        <View
          style={{
            height: 50,
            backgroundColor: 'Green',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>John Doe</Text>
          <Text>John Doe</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: PacientList,
    },
  },
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (width / 3) * 2,
  },
);

const App = createAppContainer(Drawer);

export default App;
