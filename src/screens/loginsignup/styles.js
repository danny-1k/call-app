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
        alignSelf:'center',
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
        backgroundColor:'#fff',
        justifyContent:'center',
        borderRadius:5,

        // box shadow for both android & ios
    
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5


    },
    loginTextStyle :{
        color:'black',
        fontSize:30,
        textAlign:'center',


    },

    signupBtn: {
        width:Platform.OS==='android'?150:150,
        height:60,
        borderRadius:5,
        justifyContent:'center',
        backgroundColor:'#2541B2',

        // box shadow for both android & ios
    
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5


    },

    signupTextStyle :{
        color:'#fff',
        fontSize:30,
        textAlign:'center',
    },

});

export default styles;
