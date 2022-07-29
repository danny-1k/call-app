import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex:1 ,
        backgroundColor:'#2541B2',
    },

    header: {
        fontSize:20,
        color:'#fff',
        marginTop:30,
        marginLeft:15,
    },

    generateCodeBtn: {
        backgroundColor:'rgba(255,255,255,.8)',
        width:150,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 5,
        alignSelf:'center',
        marginTop:50,
    },

    generateCodeText: {
        fontSize:20,
        color:'#2541B2',
    },

});

export default styles;