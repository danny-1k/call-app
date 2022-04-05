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

    callPic: {
        width: 130,
        height: 130,
        borderColor:'#AF25DF',
        borderWidth:3,
        alignSelf:'center',
        borderRadius:130/2,
        marginTop:130,
    },

    callButtons: {
        
        // marginBottom:74,
        marginBottom:174,
        marginLeft:45,
        marginRight:45,

    },

    muteBtn: {
        width:60,
        height:60,
        borderRadius:60/2,
        backgroundColor:'#1D1D1D',

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
        backgroundColor:'#F90606',
    },

    leaveCallBtn: {
        backgroundColor:'#D52347',
        width:195,
        height:60,
        borderRadius:8,
        justifyContent:'center',
    },
    leaveText: {
        fontSize:30,
        color:'#fff',
        textAlign:'center',
        // alignSelf:'center',
    },

    firstRow: {
        display:'flex',
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
    },

    secondRow: {
        marginTop:100,

        display:'flex',
        flexDirection: 'row',
        flex:1,
        justifyContent:'space-between',

    },

});

export default styles;