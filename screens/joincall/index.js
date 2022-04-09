import React from 'react';
import {View,Text,TextInput} from 'react-native';
import CustomBtn from '../../components/buttons';
import styles from './styles';


const JoinCall = ()=>{
    return (
        <View style={styles.container}>

            <View style={styles.textInputContainer}>
                
                <Text style={styles.text}>Enter the call code below</Text>

                <TextInput style={styles.callCodeInput}
                           placeholder={'Example : xcjwjermhs'} 
                           placeholderTextColor={'rgba(0,0,0,.4)'} 
                           onTextInput={()=>{}}/>
            </View>

        </View>
    );
};

export default JoinCall;