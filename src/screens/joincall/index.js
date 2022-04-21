import React,{useState} from 'react';
import {View,Text,TextInput} from 'react-native';
import CustomBtn from '../../components/buttons';
import styles from './styles';


const JoinCall = (props)=>{

    const setIsValid = props.setIsValid;
    const setJoinCode = props.setJoinCode;

    return (
        <View style={styles.container}>

            <View style={styles.textInputContainer}>
                
                <Text style={styles.text}>Enter the call code below</Text>

                <TextInput style={styles.callCodeInput}
                           placeholder={'Example : xcjwjermhs'} 
                           placeholderTextColor={'rgba(0,0,0,.4)'} 
                           onChangeText={
                                newText => {
                                   setJoinCode(newText);
                                   setIsValid(newText.length >= 10)
                                }
                            }

                           />
            </View>

        </View>
    );
};

export default JoinCall;