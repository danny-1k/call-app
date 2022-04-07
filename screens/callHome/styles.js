import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#2541B2',
        // alignItems:'center',
    },
    callBtns: {
        marginTop:135,
        marginHorizontal:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },

    newCallBtn: {
        width:165,
        height:50,
        backgroundColor:'#03256C',
        borderRadius:5,
        justifyContent:'center',

    },

    joinCallBtn: {
        width:165,
        height:50,
        backgroundColor:'#FFFFFF',
        borderRadius:5,
        justifyContent:'center',


    },

    newCallBtnText: {
        fontSize:20,
        color:'#fff',
        alignSelf:'center',

    },

    joinCallBtnText: {
        fontSize:20,
        alignSelf:'center',
        color:'#03256C',


    },

    recentHeader: {
        color:'#fff',
        marginHorizontal:15,
        fontSize:18,
        marginTop:18,
        

    },

    recentCalls: {
        marginHorizontal:15,
        marginTop:45,
    },

    recentDetail : {
        borderBottomColor:'#F9F9F9',
        borderBottomWidth:.7,
        // paddingBottom:5,
        marginBottom:30,
        

    },

    recentDetailContainer: {

        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        

    },

    linkName: {
        fontSize:18,
        color:'#222222',


    },

    rejoinBtn: {
        width:83,
        height:36,
        backgroundColor:'#06BEE1',
        borderRadius:8,
        justifyContent:'center',
        marginRight:60,

    },
    rejoinBtnText: {
        textAlign:'center',
        fontSize:18,
        color:'#222222',

    },
    timeStamp: {
        fontSize:14,
        color:'#CCCCCC',
        marginLeft:30,

    },
});

export default styles;