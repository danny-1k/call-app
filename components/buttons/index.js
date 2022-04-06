import React from 'react';
import {TouchableOpacity,Text} from 'react-native';

const customBtn = ({onPress,btnStyle, textStyle, text})=>{
    return (
        <TouchableOpacity style={btnStyle} onPress={onPress}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    ) ;
};


export default customBtn;