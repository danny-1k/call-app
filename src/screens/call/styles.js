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

        height:150,
        backgroundColor:'rgba(0,0,0,.5)',
        flexDirection:'row',
        borderTopStartRadius:30,
        borderTopRightRadius:30,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15,


    },

    muteBtn: {
        width:60,
        height:60,
        borderRadius:60/2,
        backgroundColor:'#1D1D1D',
        justifyContent:'center',


    },

    detailsBtn: {
        width:60,
        height:60,
        borderRadius:60/2,
        backgroundColor:'#1D1D1D',


    },
    endCallBtn: {
        width:60,
        height:60,
        borderRadius:60/2,
        backgroundColor:'#D52347',
        justifyContent:'center',
    },

    leaveCallBtn: {
        backgroundColor:'rgba(255,0,0,.6)',
        width:130,
        height:60,
        borderRadius:8,
        justifyContent:'center',
    },
    leaveText: {
        fontSize:25,
        fontWeight:'200',
        color:'#fff',
        textAlign:'center',
    },

    mtnBtnIcon : {
        alignSelf:'center',
    },

    endCallBtnIcon : {
        alignSelf:'center',
    },

});

export default styles;