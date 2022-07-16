import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#0D142E',
        width:'100%',
        height:'100%',
        flex:1,
        display:'flex',
        justifyContent:'space-between',
    },


    callParticipantsContainer: {
        flexDirection:'row',
        justifyContent:'space-around'
    },

    callButtons: {

        height:100,
        flexDirection:'row',
        borderTopStartRadius:30,
        borderTopRightRadius:30,
        justifyContent:'space-around',
        alignItems:'center',
        paddingHorizontal:15,


    },

    callBtn: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:35,
    },

    speaker: {
        backgroundColor:'rgba(0,0,0,.2)',

    },

    mute: {
        backgroundColor:'rgba(0,0,0,.2)',


    },

    hangup: {
        backgroundColor:'red',

    },



    bottomSheet: {
        backgroundColor:'#1d1d1d',
    },

});

export default styles;