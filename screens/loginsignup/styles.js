import React from 'react';
import {StyleSheet} from 'react-native';

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
        marginHorizontal:30,
        marginBottom:250,
    },

    loginBtn: {
        width:150,
        height:60,
        backgroundColor:'#333333',
        justifyContent:'center',
        borderRadius:8,


    },
    loginTextStyle :{
        color:'#fff',
        fontSize:30,
        textAlign:'center',


    },

    signupBtn: {
        width:150,
        height:60,
        borderColor:'#707070',
        borderWidth:1,
        borderRadius:8,
        justifyContent:'center',
    },

    signupTextStyle :{
        color:'#000',
        fontSize:30,
        textAlign:'center',
    },

});

export default styles;
