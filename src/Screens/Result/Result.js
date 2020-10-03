import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Share,
    ImageBackground,
} from 'react-native';
import common from "../../styles/common.style";

export default class Correct extends React.Component {
    render() {
        let data = this.props.route.params;
        let c= data.data.correct>20?20:data.data.correct
        let percentage = (c / data.data.totalQ) * 100;
        return (
            <ImageBackground
                source={require('./../../Assests/balloon-5.gif')}
                style={styles._backgroundImg}>
                <View style={styles._container}>
                    <View style={styles._greetingCard}>
                        <Text style={styles._correct}>
                            نتيجة الاختبار
                        </Text>
                    </View>
                    <View style={{
                        width: 139, height: 139, backgroundColor: '#D4F9FF', borderRadius: 70,
                        alignItems: 'center', justifyContent: 'center', borderColor: '#68d0fd', borderWidth: 2
                    }}>
                        <Text style={styles._correct}>{c} / {data.data.totalQ}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('home')}
                        style={{marginVertical: 20}}
                    >
                        <Text style={styles._btnText}> هل تريد إرسال الإختبار</Text>
                    </TouchableOpacity>

                    <View style={{
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                        alignSelf: 'center',
                        width: 300,
                        marginTop: 20
                    }}>
                        <ImageBackground source={require('./../../Assests/bbb1.png')}
                                         style={{
                                             width: 150,
                                             height: 56,
                                         }}>
                        <TouchableOpacity
                            onPress={() => {

                                let text ='لقد حصلت على نتيجة'+'%' + percentage +  'في برنامج مسابقات الأطفال';
                                // if (Platform.OS === 'android') {
                                //     text = text.concat('https://www.linkedin.com/in/smart-pace-219a921a2/')
                                // } else {
                                //     text = text.concat('https://www.linkedin.com/in/smart-pace-219a921a2/')
                                // }
                                let shareOptions = {
                                    title: 'kids App',
                                    message: text,

                                };

                                Share.share(shareOptions)
                                    .then(async (res) => {

                                    })
                                    .catch((err) => {
                                        err && console.log(err);
                                    });
                            }}
                            //style={styles._gettingStart}
                            style={{
                                // backgroundColor: 'red',
                                borderRadius: 20,
                                width: '100%', height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text style={[styles._btnText, {color: 'white'}]}></Text>
                        </TouchableOpacity>
                        </ImageBackground>
                        <ImageBackground source={require('./../../Assests/bbb.png')}
                                         style={{
                                             width: 150,
                                             height: 56,
                                         }}>
                            <TouchableOpacity
                                style={{
                                   // backgroundColor: 'red',
                                    borderRadius: 20,
                                    width: '100%', height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onPress={()=>  this.props.navigation.navigate('register')}
                            >
                                <Text style={[styles._btnText, {color: 'white'}]}> </Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
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
        letterSpacing: 2,
        padding: 9,
        ...common.RegularFont,
        fontSize: 18,

    },
    _correct: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
        textAlign: 'center',
        letterSpacing: 1,
        ...common.MediumFont,
    },

    _fail: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
        color: 'red',
        textAlign: 'center',
        letterSpacing: 1,
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
    _greetingCard: {
        // backgroundColor: 'green',
        padding: 30,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        opacity: 0.8,
    },
});
