import React from 'react';
import {View,TouchableOpacity,Text,Image} from 'react-native';

const CustomBtn = (props)=>{


    return (

        <View style={props.btnStyle}>
            <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
                <Text style={props.textStyle}>{props.text}</Text>
            </TouchableOpacity>
        </View>


    ) ;
};

const BtnWithIcon = props=> {


    return (

            <View style={props.btnStyle}>

                <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>


                    <View style={props.textIconStyle}>
                        {props.text && <Text style={props.textStyle}>{props.text}</Text>}
                        
                        <Image source={props.imageSource}  style={props.iconStyle}></Image>
                    
                    </View>

                </TouchableOpacity>
                

            </View>


    );
};


const ButtonWrapper = (props) => {

    return (

        <View style={props.btnStyle}>
            <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
                {props.children}
            </TouchableOpacity>
        </View>
    );

};


export default CustomBtn;
export {BtnWithIcon, ButtonWrapper};