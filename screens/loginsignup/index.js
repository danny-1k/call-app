import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from './styles';
import CustomBtn from '../../components/buttons';

const LoginSignup = ()=>{

    return (

        <View style={styles.container}>
            
            <Image style={styles.img}/>


            <View style={styles.Btns}>

                <CustomBtn 
                        btnStyle={styles.loginBtn}
                        textStyle={styles.loginTextStyle}
                        text={"Log in"}
                        onPress={console.warn('log in btn clicked')}/>

                
                <CustomBtn 
                        btnStyle={styles.signupBtn}
                        textStyle={styles.signupTextStyle}
                        text={"Sign up"}
                        onPress={console.warn('sign up btn clicked')}/>

            </View>



        </View>

    )
};

export default LoginSignup;