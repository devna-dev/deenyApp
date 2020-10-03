import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default class QuizEnd extends React.Component {
  render() {
      console.log(this.props.route.params)
    return (
      <ImageBackground
        source={{
          uri:
            'https://66.media.tumblr.com/13661c2fa3aa9070aec7ba9b0b9ac182/tumblr_o08yolD1B61skcd7fo1_r1_400.gifv',
        }}
        style={styles._backgroundImg}>
        <View style={styles._container}>
          <Text style={styles._correct}>
          هل أنت مستعد لمعرفة درجتك؟

          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('result',{data:this.props.route.params})}
            style={styles._gettingStart}>
            <Text style={styles._btnText}>تابع</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _gettingStart: {
    borderRadius: 5,
    borderRadius: 10,
    backgroundColor: '#63ed63',
    width: 250,
    margin: 10,
    padding: 6,
    position: 'absolute',
    bottom: 0,
    marginBottom: 40,
    elevation: 10,
  },
  _btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'green',
    fontWeight: 'bold',
    letterSpacing: 2,
    padding: 9,
  },
  _correct: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'grey',
    margin: 40,
    opacity: 0.8,
    borderRadius: 10,
  },
  _backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    shadowColor: '#f23535',
    shadowOffset: {
      width: 0.5,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 15,
  },
});
