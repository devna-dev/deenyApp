import React from 'react';
import {Text, View, StyleSheet, Image, TextInput, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import common from "../../styles/common.style";

export default class ChoosNumberOfQuestions extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            num: 20
        };
    }

    componentDidMount() {
        this.setState({username: ''})
    }

    render() {
        return (
            <ImageBackground imageStyle={{
                //width: '100%',
                //height: '100%',
                resizeMode: 'stretch'
            }}
                             source={require('./../../Assests/back.png')}
                             style={styles._container}>
                {/*<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>*/}
                {/*<Image*/}
                {/*source={require('./../../Assests/playground.png')}*/}
                {/*style={{height: 130, width: 200}}*/}
                {/*/>*/}
                {/*</View>*/}

                <View style={{flex: 1, justifyContent: 'flex-start', marginTop: '70%'}}>
                    <Text style={{
                        alignSelf: 'center', marginTop: '8%', marginBottom: '4%',
                        ...common.LightFont, fontSize: 20
                    }}>اختر عدد الأسئلة</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 40,
                            width: 250,
                            marginBottom: 40,
                        }}>
                        {/*<TextInput*/}
                        {/*placeholder=" الرجاء إدخال اسمك"*/}
                        {/*value={this.state.username}*/}
                        {/*style={styles._textInput}*/}
                        {/*onChangeText={e => this.setState({username: e})}*/}
                        {/*/>*/}
                        <TouchableOpacity style={{
                            alignItems: 'center', width: 60, height: 60, justifyContent: 'center',
                            backgroundColor: '#D4F9FF', borderRadius: 30
                        }}
                                          onPress={()=>{
                                              if(this.state.num <= 20){

                                              }else{
                                                  this.setState({num:this.state.num-20})
                                              }
                                          }}>
                            <Text style={{color: '#00B1FF', ...common.RegularFont, fontSize: 35}}>-</Text>
                        </TouchableOpacity>
                        <View style={{
                            alignItems: 'center', width: 111, height: 70, justifyContent: 'center',
                            backgroundColor: 'white', borderRadius: 22,marginHorizontal:'5%'
                        }}>
                        <Text style={{...common.MediumFont, fontSize: 35}}>{this.state.num}</Text>
                        </View>
                        <TouchableOpacity style={{
                            alignItems: 'center', width: 60, height: 60, justifyContent: 'center',
                            backgroundColor: '#D4F9FF', borderRadius: 30
                        }}
                                          onPress={()=>{
                                              if(this.state.num >= 100){

                                              }else{
                                                  this.setState({num:this.state.num+20})
                                              }
                                          }}>
                            <Text style={{color: '#00B1FF', ...common.RegularFont, fontSize: 35}}>+</Text>
                        </TouchableOpacity>
                    </View>

                        <TouchableOpacity
                           // disabled={this.state.username ? false : true}
                            onPress={() =>
                                this.props.navigation.navigate('home', {
                                    user: this.state.username,
                                    num:this.state.num+1
                                })
                            }>
                            <ImageBackground
                                style={styles._gettingStart}
                                source={require('./../../Assests/btn.png')}>
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
        //flex: 1,
        // padding: 60,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#16ff0a',
        width: '100%',
        height: '100%',
        //resizeMode: 'contain',

    },
    _gettingStart: {
        //width: '100%',
        borderRadius: 20,
        //backgroundColor: 'green',
        width: 250,
        padding: 6,
    },
    _btnText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        //  padding: 9,
        ...common.MediumFont,
        fontSize: 24,
        height: 50
    },
    _textInput: {
        borderWidth: 2,
        borderColor: '#64EBFF',
        borderRadius: 14,
        textAlign: 'center',
        backgroundColor: 'white',
        flex: 1,
        height: 60,
        ...common.LightFont
    },
});
