import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class GettingStart extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <Image
          source={require('./../../Assests/playground.png')}
          style={{height: 220, width: 320}}
        />
        <TouchableOpacity
          style={styles._gettingStart}
          onPress={() => this.props.navigation.navigate('register')}>
          <Text style={styles._btnText}>ابدأ بإسم الله</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    padding: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#16ff0a',
  },
  _gettingStart: {
    backgroundColor: 'green',
    width: '100%',
    borderRadius: 5,
    borderRadius: 100,
    backgroundColor: 'green',
    width: 250,
    padding: 6,
  },
  // borderWidth: 1,

  _btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontWeight: 'bold',
    padding: 9,
  },
});
