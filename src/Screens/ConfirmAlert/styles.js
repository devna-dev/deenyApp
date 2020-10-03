import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
    },
    address: {
        fontSize: 18,
    },
    address1: {
        fontSize: 13,
        marginTop: '5%',
    },
    list: {
        marginTop: '5%',
    },
    list_view: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: '5%',
        height: 45,
        borderBottomWidth: 1,
    },
    list_text: {
        width: '80%',
        fontSize: 16,
    },
    list_text1: {
        width: '85%',
        fontSize: 16,
        marginTop:'5%',
        alignSelf:'center'
    },
    list_text2: {
        width: '85%',
        fontSize: 16,
        marginTop:'5%',
        alignSelf:'center'
    },
    input:{
        width:'85%',
        height:'40%',
        alignSelf:'center',
        textAlignVertical:'top',
        borderWidth:1,
        marginTop:'5%'
    },
    btn: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28,
        height: 60,
       // marginTop: '3%',
       // marginBottom: '10%',
      //  backgroundColor:'red'
    },
    btn_text: {
    },
    modal_back: {
        width: 311,
        height: '35%',
        alignSelf: 'center',
        borderRadius: 12,
        padding: 5,
        backgroundColor:'white'
    },
    modal_container: {
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    contact_text: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        paddingTop:'10%',
        marginBottom: '4%'
    },
    contact_number: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
    },
    contact_us: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 24,
        marginTop: 10,
    },
    img: {
        width: 13.57,
        height: 13.57,
        alignSelf: 'flex-end',
        margin: 10,

    },
    btn1: {
        width: '100%',
        alignSelf: 'center',
        borderRadius: 28,
        height: 45,
        marginTop: '10%',
        marginBottom: '10%',
        borderTopWidth:1
    },
});