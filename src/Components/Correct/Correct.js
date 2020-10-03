import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import common from "../../styles/common.style";
export default class Correct extends React.Component {
  render() {
    let slectedAns = this.props.slectedAns;
    let seemore = this.props.seemore;
    let totalQ = this.props.totalQ;

    return (

        <ImageBackground
            source={require('./../../Assests/correctAnswetr.png')}
            style={styles._backgroundImg}>
        <View style={styles._container}>
            <View style={{
                backgroundColor: '#D4FFD8', borderRadius: 56.5, height: 113, width: 113,
                alignItems: 'center', justifyContent: 'center'
            }}>
          <Image
            source={require('./../../Assests/correct.png')}
            style={{height: 62.66, width: 62.66,}}
          />
            </View>
          <Text style={styles._correct}>الجواب صحيح</Text>
            <View style={{width: 302, backgroundColor: 'white', borderRadius: 16, }}>
                <Text style={[styles._wrong, {color: '#C1C1C1', marginTop: 10}]}>الإجابة الصحيحة هي</Text>
                <Text style={[styles._wrong, {color: '#515151'}]}>
                    {this.props.seemore === undefined
                        ? this.props.seemore
                        : this.props.seemore}
                </Text>
            </View>
            <TouchableOpacity
                style={styles._gettingStart}
                onPress={() => this.props.onPress()}>
                <ImageBackground source={require('./../../Assests/btn3.png')}
                                 style={{width: '100%', height: 50,alignItems:'center',justifyContent:'center'}}>

                    <Text style={styles._btnText}>استمر</Text>

                </ImageBackground>
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
  //  backgroundColor: '#cef995',
    opacity: 0.8,
      width:'100%'
  },
  _gettingStart: {
    borderRadius: 20,
  //  backgroundColor: '#63ed63',
    width: '100%',
   // margin: 10,
    padding: 6,
    position: 'absolute',
    bottom: 0,
    marginBottom: 10,
    //elevation: 10,
  },
  _btnText: {
      textAlign:'center',
      textAlignVertical:'center',
      // fontWeight: 'bold',
      color: 'white',
      //fontWeight: 'bold',
      fontSize: 20,
      //letterSpacing: 2,
      //  padding: 9,
      ...common.RegularFont
  },
  _correct: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 10,
    color: 'green',
    textAlign: 'center',
      ...common.RegularFont
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
      width:'100%'
  },
    _wrong: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 19,
        textAlign: 'center',
        padding: 10,
        ...common.RegularFont
    },
});
