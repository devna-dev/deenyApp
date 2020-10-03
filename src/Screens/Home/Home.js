import React from 'react';
import {

    BackHandler,
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    I18nManager,
    ImageBackground,
    Dimensions

} from 'react-native';
import {Correct, Wrong, DropDown} from '../../Components';
import Entypo from 'react-native-vector-icons/Entypo';
import qeustionData from './../../Qestions/Question';
import LinearGradient from 'react-native-linear-gradient';
import ConfirmAlert from "../ConfirmAlert/ConfirmAlert";
import common from "../../styles/common.style";

I18nManager.forceRTL(false)
let randomQuestion = []
let dd=0
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            num: 0,
            show: true,
            attempt: null,
            correct: 0,
            wrong: 0,
            model: null,
            back_flag: false,
            correct_answer: ''
        };
        this.backButtonHandler = this.backButtonHandler.bind(this);

    }


    backButtonHandler = () => {

        this.setState({back_flag: true})
        return true
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backButtonHandler);
    }

    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this.backButtonHandler);
        let x = qeustionData

        if(this.props.route.params.num-1==20){
            dd=20
        }else if(this.props.route.params.num-1==40){
            dd=41
        }else if(this.props.route.params.num-1==60){
            dd=62
        }else if(this.props.route.params.num-1==80){
            dd=83
        }else{
            dd=104
        }
        let randomQuestion = [];
        for (var i = 0; i < qeustionData.length-1; i++) {
            let c =Math.floor(Math.random() * qeustionData.length)
          randomQuestion.push(x[c]);
          x.splice(c, 1);
        }
        this.setState({data: randomQuestion, model: this.props.route.params.num-1});
        //this.setState({data: qeustionData, model: this.props.route.params.num-1});

    }

    slectOption = (option, i) => {
        console.log(option);
        let {num} = this.state;
        let data = this.state.data;
        data[num].selectedValue = option;
        let seemore = data[num].fullAns;
        this.setState({
            selected: i,
            data: data,
            slectedAns: option,
            seemore: seemore,
        });
    };
    checkQuestion = () => {
        let {num, data, correct, wrong, model} = this.state;
        this.setState({correct_answer: this.state.data[num].fullAns})
        if (num < dd) {
            if (data[num].selectedValue === data[num].correct) {
                this.setState({attempt: 'correct', correct: this.state.correct + 1});
            }

            if (data[num].selectedValue !== data[num].correct) {
                this.setState({attempt: null, wrong: this.state.wrong + 1});
            }

            this.setState({num: this.state.num + 1, show: false, selected: null});
        } else {
            this.props.navigation.navigate('result', {
                data: {
                    user: this.props.route.params.user,
                    correct: correct,
                    wrong: wrong,
                    totalQ: model,
                }

            });
            this.setState({num: 0, correct: 0, wrong: 0, selected: null});
        }
    };

    continueQuestion = () => {
        this.setState({show: true});
    };

    slectQustionQuantity = totalQ => {
        // let randomQuestion = [];
        // for (var i = 0; i < totalQ+2; i++) {
        //   var idx = Math.floor(Math.random() * qeustionData.length);
        //   randomQuestion.push(qeustionData[idx]);
        //   qeustionData.splice(idx, 1);
        //   this.setState({data: randomQuestion, model: totalQ});
        // }
    };

    render() {
        let {num, option, selected, data, correct, wrong, model} = this.state;

        return (
            <ImageBackground imageStyle={{
                //width: '100%',
                //height: '100%',
                resizeMode: 'stretch'
            }}
                             source={require('./../../Assests/home_back.png')} style={styles._container}>
                {model === null ? (
                    <View
                        style={styles._dropDown}>
                        <DropDown onPress={this.slectQustionQuantity}/>
                    </View>
                ) : (
                    <View
                        style={styles._container1}>
                        {/*<View style={styles._header}>*/}
                        {/*<TouchableOpacity onPress={() => this.setState({back_flag: true})}>*/}
                        {/*<Entypo name="cross" color="red" size={35}/>*/}
                        {/*</TouchableOpacity>*/}

                        {/*<Text style={styles._correct}> صح: {this.state.correct}</Text>*/}
                        {/*<Text style={styles._wrong}>خطأ: {this.state.wrong}</Text>*/}
                        {/*</View>*/}
                        {/* question section */}

                        {this.state.show ? (
                            <View>
                                <Text style={styles._showQuestions}>
                                    {num + 1} / {this.state.model}
                                </Text>
                                <View style={styles._questionView}>
                                    <Text style={styles._quetion}>
                                        {data ? data[num].q : null}
                                    </Text>
                                    <ScrollView>
                                        <View style={styles._optionView}>
                                            {data
                                                ? data[num].options.map((val, i) => (
                                                    <TouchableOpacity
                                                        style={
                                                            selected === i
                                                                ? styles.slectedOtion
                                                                : styles._option
                                                        }
                                                        onPress={() => this.slectOption(val, i)}>
                                                        <View style={styles._optionText}>
                                                            <Text
                                                                style={{
                                                                    fontSize: 16,
                                                                    color: selected === i ? 'white' : '#514f4f',
                                                                    fontWeight: 'bold',
                                                                    ...common.RegularFont
                                                                }}>
                                                                {val}
                                                            </Text>
                                                        </View>

                                                        {/*<View*/}
                                                        {/*style={[*/}
                                                        {/*styles._circle,*/}
                                                        {/*{*/}
                                                        {/*borderColor:*/}
                                                        {/*selected === i ? '#01bafd' : 'grey',*/}
                                                        {/*},*/}
                                                        {/*]}>*/}
                                                        {/*<Text style={[styles._optionNum]}/>*/}
                                                        {/*</View>*/}
                                                    </TouchableOpacity>
                                                ))
                                                : null}
                                        </View>
                                    </ScrollView>
                                </View>


                                <TouchableOpacity
                                    disabled={selected === null ? true : false}
                                    onPress={() => this.checkQuestion()}>
                                    <ImageBackground style={[styles._gettingStart, {
                                        width: Dimensions.get('window').width,
                                        marginBottom: 10
                                    }]}
                                                     source={require('./../../Assests/btn1.png')}>
                                        <Text
                                            style={styles._btnText}
                                            disabled={selected === null ? true : false}>
                                            تحقق من الجواب </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        ) : this.state.attempt === 'correct' ? (
                            <Correct
                                onPress={this.continueQuestion}
                                slectedAns={this.state.slectedAns}
                                seemore={this.state.seemore}
                                correct_answer={this.state.correct_answer}
                            />
                        ) : (
                            <Wrong
                                correct_answer={this.state.correct_answer}
                                onPress={this.continueQuestion}
                                slectedAns={this.state.slectedAns}
                                seemore={this.state.seemore}

                            />
                        )}
                    </View>
                )}
                <ConfirmAlert visible={this.state.back_flag}
                              navigation={this.props.navigation}
                              onRequestClose={() => this.setState({back_flag: false})}/>
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
        // width: '100%',
        // height: '100%',
        //resizeMode: 'contain',
    },
    _container1: {
        //flex: 1,
        // padding: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        //resizeMode: 'contain',
    },
    _header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        elevation: 10,
        paddingTop: Platform.OS == 'ios' ? 50 : 10
    },
    _correct: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#a1ed3d',
    },
    _wrong: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#cf011b',
    },
    _questionView: {
        margin: 10,
        padding: 10,
        flex: 1,
        justifyContent: 'center',
    },
    _quetion: {
        // fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 30,
        width: Dimensions.get('window').width * 0.9,
        textAlign: 'right',
        ...common.RegularFont,
        // backgroundColor:'red'
    },
    _optionView: {},
    _option: {
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 16,
        borderColor: 'white',
        alignItems: 'center',
        padding: 15,
        marginBottom: 15,
        backgroundColor: 'white'
    },
    slectedOtion: {
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 16,
        borderColor: '#FFAA00',
        alignItems: 'center',
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#FFAA00'
    },

    _circle: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -5,
        marginRight: 5,
        borderColor: 'grey',
    },
    _optionNum: {
        fontWeight: 'bold',
        color: 'grey',
        height: 5,
        width: 5,
        borderRadius: 100,
        backgroundColor: 'grey',
    },
    _optionText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 10,
    },
    _gettingStart: {
        borderRadius: 20,
        // backgroundColor: 'green',
        // margin: 10,
        // padding: 6,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',

    },
    _btnText: {
        textAlign: 'center',
        //fontWeight: 'bold',
        color: 'white',
        // fontWeight: 'bold',
        //letterSpacing: 2,
        // padding: 9,
        ...common.RegularFont,
        fontSize: 20,
        // backgroundColor:'red'
    },

    _showQuestions: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        width: '100%',
        ...common.MediumFont,
        backgroundColor: 'white',
        height: 45,
        borderRadius: 17,
        marginTop: '10%',
        alignSelf: 'center'

    },
    _dropDown: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        // margin: 20,
    },
});
