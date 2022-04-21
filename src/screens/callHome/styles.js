import React from 'react';
import { StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#2541B2',
        // alignItems:'center',
    },
    callBtns: {
        marginTop:50,
        marginHorizontal:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },

    newCallBtn: {
        width:Platform.OS==='android'?150:165,
        height:50,
        backgroundColor:'#03256C',
        borderRadius:5,
        justifyContent:'center',

    },

    joinCallBtn: {
        width:Platform.OS==='android'?150:165,
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
        marginTop:50,

        

    },

    recentCalls: {
        marginTop:35,
    },

    recentDetail : {
        borderBottomColor:'rgba(249,249,249,.4)',
        borderBottomWidth:1,
        marginBottom:30,
        paddingBottom:15,
        

    },

    recentDetailContainer: {

        display:'flex',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:30,

        

    },

    linkName: {
        fontSize:18,
        color:'#222222',


    },

    rejoinBtn: {
        width:68,
        height:30,
        backgroundColor:'#06BEE1',
        borderRadius:4,
        justifyContent:'center',
        marginRight:15,

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
    // firstRow:{
    //     marginRight:60,
    // }
});

export default styles;