import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    backDrop: {
        backgroundColor:'rgba(0,0,0,.3)',
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
    },

    alertBox: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    alertBoxContainer: {
        backgroundColor:'#333',
        maxWidth:280,
        width:'100%',
        margin:48,
        elevation:24,
        borderRadius:2,
    },

    alertBoxTitle: {
        color:'#000',
        fontFamily:'initial',
        fontSize:24,
        fontWeight:'bold',

    },

    alertBoxMessage: {
        color:'#000',
        fontFamily:'initial',
        fontSize:16,
        fontWeight:'normal',
    },

});

export default styles;