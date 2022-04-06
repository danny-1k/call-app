import React from 'react';
import {View,TouchableOpacity,Text,Image} from 'react-native';

const CustomBtn = (props)=>{


    return (

        <View style={props.btnStyle}>
            <TouchableOpacity style={props.btnStyle} onPress={props.onPress}>
                <Text style={props.textStyle}>{props.text}</Text>
            </TouchableOpacity>
        </View>


    ) ;
};

const BtnWithIcon = props=> {


    return (
        <TouchableOpacity onPress={props.onPress}>

            <View style={props.btnStyle}>

                    <View style={props.textIconStyle}>
                        {props.text && <Text style={props.textStyle}>{props.text}</Text>}
                        
                        <Image source={props.imageSource}  style={props.iconStyle}></Image>
                    
                    </View>

            </View>
        </TouchableOpacity>



    );
};


export default CustomBtn;
export {BtnWithIcon};