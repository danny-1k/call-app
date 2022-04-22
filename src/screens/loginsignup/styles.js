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
        alignSelf:'center',
        width:315,
    },

    Btns: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        // marginHorizontal:15,
        marginBottom:250,
        justifyContent:'center',
    },

    loginBtn: {
        width:'90%',
        height:60,
        backgroundColor:'#2541B2',
        justifyContent:'center',
        borderRadius:5,
        // box shadow for both android & ios
    
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,


    },
    loginTextStyle :{        
        color:'#fff',
        fontSize:30,
        textAlign:'center',


    },


});

export default styles;
