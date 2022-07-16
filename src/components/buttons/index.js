import React from 'react';
import {View,TouchableOpacity,Text,Image} from 'react-native';

const CustomBtn = (props)=>{


    return (

        <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
            <View style={props.btnStyle}>
                    <Text style={props.textStyle}>{props.text}</Text>
            </View>
        </TouchableOpacity>


    ) ;
};

const BtnWithIcon = props=> {


    return (

            <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
                <View style={props.btnStyle}>



                    <View style={props.textIconStyle}>
                        {props.text && <Text style={props.textStyle}>{props.text}</Text>}
                        
                        <Image source={props.imageSource}  style={props.iconStyle}></Image>
                    
                    </View>

                </View>
            </TouchableOpacity>
                



    );
};


const ButtonWrapper = (props) => {

    return (

            <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
                <View style={props.btnStyle}>

                    {props.children}
                </View>
            </TouchableOpacity>
    );

};


export default CustomBtn;
export {BtnWithIcon, ButtonWrapper};