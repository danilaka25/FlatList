import React from 'react';

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'Mimi Barrow, Male, 09/09/1980 (38)',
    doctor: 'Dr. Vincent Vega',
    bip: '210/100',
    ac: '9.1',
    lastChech: '12',
  },
  {
    id: 2,
    title: 'Jonathan Norton, Female, 01/09/1979 (25)',
    doctor: 'Dr. Vincent Vega',
    bip: '140/90',
    ac: '8.5',
    lastChech: '2',
  },
  {
    id: 3,
    title: 'Mimi Barrow, Female, 09/09/1981 (21)',
    doctor: 'Dr. Yazmin Higgins',
    bip: '140/90',
    ac: '7.2',
    lastChech: '12',
  },
  {
    id: 4,
    title: 'Neha Stacey, Male, 12/09/1988 (144)',
    doctor: 'Dr. Vincent Vega',
    bip: '140/90',
    ac: '7.5',
    lastChech: '2',
  },
  {
    id: 5,
    title: 'Romany Clay, Female, 03/03/1980 (37)',
    doctor: 'Dr. Yazmin Higgins',
    bip: '210/100',
    ac: '8.5',
    lastChech: '8',
  },
  {
    id: 6,
    title: 'Romany Clay, Male, 12/09/1981 (44)',
    doctor: 'Dr. Vincent Vega',
    bip: '210/100',
    ac: '8.5',
    lastChech: '3',
  },
  {
    id: 7,
    title: 'Neha Stacey, Male, 12/09/1988 (144)',
    doctor: 'Dr. Vincent Vega',
    bip: '140/90',
    ac: '7.5',
    lastChech: '2',
  },
  {
    id: 8,
    title: 'Romany Clay, Female, 03/03/1980 (37)',
    doctor: 'Dr. Yazmin Higgins',
    bip: '210/100',
    ac: '8.5',
    lastChech: '8',
  },
  {
    id: 9,
    title: 'Romany Clay, Male, 12/09/1981 (44)',
    doctor: 'Dr. Vincent Vega',
    bip: '210/100',
    ac: '8.5',
    lastChech: '3',
  },
];

export default class PacientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientList: DATA,
    };
  }

  searchFunction = text => {
    const newData = DATA.filter(function(item) {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      patientList: newData,
    });
  };

  render() {
    return (
      <View style={styles.Main}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Patient Care Opportunities</Text>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.filterContainer}>
            <View style={styles.searchInputWrap}>
              <Image
                source={{
                  uri:
                    'https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-128.png',
                }}
                style={styles.searchIcon}
              />

              <TextInput
                placeholder="Search"
                style={styles.searchInput}
                onChangeText={text => this.searchFunction(text)}
                placeholderTextColor="#5A009D"
                value={this.state.text}
                autoCorrect={false}
              />
              <TouchableOpacity>
                <View style={styles.searchIconWrapper}>
                  <Image
                    source={{
                      uri:
                        'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2014/png/iconmonstr-control-panel-9.png&r=90&g=0&b=157',
                    }}
                    style={styles.settingsIcon}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.flatListContainer}>
            <FlatList
              style={styles.flatList}
              data={this.state.patientList}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View style={styles.flatListItem}>
                  <View style={styles.flatListItemMain}>
                    <Text style={styles.flatListItemTitle}>{item.title}</Text>
                    <Text style={styles.flatListItemDoctor}>{item.doctor}</Text>
                  </View>

                  <View style={styles.flatListItemAdditional}>
                    <View>
                      <Text style={styles.desc}>BIP</Text>
                      <Text style={styles.textColorRed}>{item.bip}</Text>
                    </View>

                    <View>
                      <Text style={styles.desc}>A3C</Text>
                      <Text
                        style={
                          item.ac < 8
                            ? styles.textColorPurple
                            : styles.textColorRed
                        }>
                        {item.ac}%
                      </Text>
                      {/* textColorPurple  textColorPurple*/}
                    </View>

                    <View>
                      <Text style={styles.desc}>Last Checkup</Text>
                      <Text
                        style={
                          item.lastChech < 6
                            ? styles.textColorPurple
                            : styles.textColorRed
                        }>
                        {item.lastChech} months ago
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Image
            source={{
              uri:
                'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2017/png/iconmonstr-building-6.png&r=90&g=0&b=157',
            }}
            style={styles.footerIcon}
          />

          <Text>Home</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
  },

  header: {
    backgroundColor: '#5A009D',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingBottom: 15,
    flex: 1,
  },

  headerText: {
    color: '#ffffff',
    fontSize: 21,
  },

  mainContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f4e9f7',
    flex: 9,
  },

  filterContainer: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchInputWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E2B8EC',
    height: 50,
    paddingLeft: 40,
    backgroundColor: '#E2B8EC',
  },

  searchIcon: {
    height: 25,
    width: 25,
    position: 'absolute',
    left: 10,
    zIndex: 999,
  },

  searchIconWrapper: {
    height: 50,
    width: 50,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#999999',
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },

  settingsIcon: {
    height: 20,
    width: 20,
  },

  flatList: {
    marginBottom: 80,
  },

  flatListItem: {
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 17,
    height: 125,
    paddingTop: 0,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
  },

  flatListItemMain: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    height: 72,
    justifyContent: 'center',
  },

  flatListItemAdditional: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 42,
  },

  desc: {
    color: '#cccccc',
    fontSize: 11,
    marginBottom: 3,
  },

  textColorRed: {
    color: 'red',
    fontSize: 12,
    fontWeight: '600',
  },

  textColorPurple: {
    color: '#5A009D',
    fontSize: 12,
    fontWeight: '600',
  },

  flatListItemTitle: {
    color: '#5A009D',
    fontSize: 20,
  },

  flatListItemDoctor: {
    color: '#999999',
  },

  footer: {
    flex: 1,
    height: 60,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    paddingTop: 10,
    alignItems: 'center',
  },

  footerIcon: {
    height: 30,
    width: 30,
  },
});
