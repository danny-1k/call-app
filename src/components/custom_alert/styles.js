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
        backgroundColor:'#fafafa',
        maxWidth:280,
        width:'100%',
        margin:48,
        elevation:24,
        borderRadius:5,
    },

    alertBoxTitle: {
        color:'#000',
        fontFamily:'initial',
        fontSize:24,
        fontWeight:'bold',
        margin:24,

    },

    alertBoxMessage: {
        color:'#000',
        fontFamily:'initial',
        fontSize:16,
        fontWeight:'normal',
        marginLeft:24,
        marginRight:24,
        marginBottom:24,
    },

    alertButtons: {
        marginTop:0,
        marginRight:0,
        marginBottom:8,
        marginLeft:24,
        flexDirection:'row',
        justifyContent:'flex-end',
    },

    alertButton: {
        marginTop:12,
        marginRight:8,
        padding:10,
        elevation:2,
        // alignSelf:'flex-end',

    },

    alertButtonText:{
        fontWeight:'500',
        fontSize:16,
        textTransform:'uppercase',
        color:'#387ef5',
    }

});

export default styles;