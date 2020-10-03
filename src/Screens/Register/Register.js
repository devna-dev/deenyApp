import React from 'react';
import {Text, View, StyleSheet, Image, TextInput, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import common from "../../styles/common.style";
import ChoosNumberOfQuestions from "../ChoosNumberOfQuestions/ChoosNumberOfQuestions";

export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ''
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
                    }}>أدخل اسمك</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 40,
                            width: 250,
                            marginBottom: 40,
                        }}>
                        <TextInput
                            placeholder=" الرجاء إدخال اسمك"
                            value={this.state.username}
                            style={styles._textInput}
                            onChangeText={e => this.setState({username: e})}
                        />
                    </View>
                    <ImageBackground style={styles._gettingStart}
                                     source={require('./../../Assests/btn.png')}>
                        <TouchableOpacity
                            disabled={this.state.username ? false : true}
                            onPress={() =>
                                // this.props.navigation.navigate('home', {
                                //     user: this.state.username,
                                // })
                                this.props.navigation.navigate('ChoosNumberOfQuestions', {
                                    user: this.state.username,
                                })
                            }>
                            <Text style={styles._btnText}>استمر</Text>
                        </TouchableOpacity>
                    </ImageBackground>
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
