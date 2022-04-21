import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from './styles';
import CustomBtn from '../../components/buttons';

const LoginSignup = ({navigation})=>{

    return (

        <View style={styles.container}>

            <View>
                <Image source={require('../../assets/loginsignup/lsimg.png')}style={styles.img} resizeMode={'contain'}/>

            </View>
            


            <View style={styles.Btns}>

                <CustomBtn 
                        btnStyle={styles.loginBtn}
                        textStyle={styles.loginTextStyle}
                        text={"Log in"}
                        onPress={()=>navigation.navigate("Login")}/>

                
                <CustomBtn 
                        btnStyle={styles.signupBtn}
                        textStyle={styles.signupTextStyle}
                        text={"Sign up"}
                        onPress={()=>navigation.navigate("Signup")}/>

            </View>



        </View>

    )
};

export default LoginSignup;