import React from 'react';
import { StyleSheet } from "react-native";
import colors from '../../theme';

const styles = StyleSheet.create({
    btn: {
        height: 60,
        width: "100%",
        // marginTop: 30,
        borderRadius: 5,
        borderColor: "#655F5F",
        backgroundColor:colors.white,
        justifyContent:'center',
    
        // box shadow for both android & ios
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,

        marginBottom:30,
    
    },
      
    btnText: {
        fontSize: 15,
        marginLeft:15,
        color: colors.black,
        marginTop:5,
    
    },

    Logo: {
        width: 30,
        height: 30,
        marginRight:15,
    
    },

    innerBtnContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection:'row',
    },
});

export default styles;

