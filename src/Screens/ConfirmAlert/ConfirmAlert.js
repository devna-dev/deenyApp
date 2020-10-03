import React, {Component} from 'react';
import {Modal, View, Text, BackHandler, TouchableOpacity, Linking, TextInput, ImageBackground} from 'react-native';
import styles from './styles';


export default class ConfirmAlert extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            email_error: '',
        };
    }

    onRequestToClose = () => {
        this.props.onRequestClose();
    };

    render() {
        return (
            <Modal
                style={styles.modal}
                animationType="fade"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    this.onRequestToClose();
                }}>
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={1}
                    onPressOut={() => {
                        this.onRequestToClose();
                    }}>
                    <View style={styles.modal_container}>
                        <View style={styles.modal_back}>
                            <Text style={styles.contact_text}>هل تود الخروج فعلاً ؟ </Text>
                            <TouchableOpacity style={[styles.btn,]} onPress={() => {
                                this.onRequestToClose();
                               // BackHandler.exitApp();
                                this.props.navigation.navigate('register')
                            }}>
                                <ImageBackground source={require('./../../Assests/btn3.png')}
                                                 style={{width: '100%', height: 50,alignItems:'center',justifyContent:'center',marginBottom:10}}>

                                <Text style={{color: 'white'}}>استمرار</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn]} onPress={() => {
                                this.onRequestToClose();
                            }}>
                                <ImageBackground source={require('./../../Assests/btn2.png')}
                                                 style={{width: '100%', height: 50,alignItems:'center',justifyContent:'center',marginBottom:10}}>

                                <Text style={{color: 'white'}}>إلغاء</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    }

}
