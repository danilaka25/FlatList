import React from 'react';
import PacientList from './PacientList';
import SideMenu from './SideMenu';

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <>
        <PacientList />
        {/* <SideMenu /> */}
      </>
    );
  }
}
