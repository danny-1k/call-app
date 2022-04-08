import React from 'react';
import {StyleSheet,Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        display:'flex',
        justifyContent:'space-between',
    },

    img: {
        marginTop:90,
    },

    Btns: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:15,
        marginBottom:250,
    },

    loginBtn: {
        width:Platform.OS==='android'?150:150,
        height:60,
        backgroundColor:'#333333',
        justifyContent:'center',
        borderRadius:5,


    },
    loginTextStyle :{
        color:'#fff',
        fontSize:30,
        textAlign:'center',


    },

    signupBtn: {
        width:Platform.OS==='android'?150:150,
        height:60,
        borderColor:'#707070',
        borderWidth:1,
        borderRadius:5,
        justifyContent:'center',

    },

    signupTextStyle :{
        color:'#000',
        fontSize:30,
        textAlign:'center',
    },

});

export default styles;
