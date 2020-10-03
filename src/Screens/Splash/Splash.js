import React, {Component} from 'react';
import {View, StyleSheet, Image, ImageBackground, Text} from 'react-native';
import common from "../../styles/common.style";

export default class Splash extends Component {
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
        this.props.navigation.replace('register');
    }, 2000);
  }

  render() {
    return (
          <View
            style={{width:'100%',height:'100%', justifyContent: 'center', alignItems: 'center',
            backgroundColor:'#64EBFF'}}>
            <ImageBackground
              source={require('./../../Assests/logo.png')}
              style={{
                  width:'100%',height:'100%',
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 5,
                 resizeMode:'contain'
              }}
            >
                <View style={{backgroundColor:'white',justifyContent:'center',borderRadius:20,
                    width:158,height:158,alignItems:'center',alignSelf:'center',marginTop:'30%'}}>
                <Image style={{width:130,height:139,}} source={require('./../../Assests/qqq.png')}/>
                </View>
                <View style={{bottom:0,position:'absolute',alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white',...common.RegularFont}}>أعدها وكتبها:</Text>
                    <Text style={{...common.RegularFont}}>سالم بن سعد الطويل</Text>
                </View>
            </ImageBackground>
          </View>

    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
