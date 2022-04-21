import React from 'react';
import {View,Text,Image} from 'react-native';
import CustomBtn, {BtnWithIcon} from '../../components/buttons';

import styles from './styles';


const Call = ()=>{

    return (

    <View style={styles.container}>

        <Image style={styles.callPic} source={require('./../../assets/call/profilepic.jpg')}>

        </Image>


        <View style={styles.callButtons}>

            <View style={styles.firstRow}>

                <BtnWithIcon btnStyle={styles.muteBtn}
                             imageSource={require("../../assets/call/mic.png")}
                             iconStyle={styles.mtnBtnIcon}
                             onPress={()=>{console.warn('Clicked on mute btn')}}/>


                <BtnWithIcon btnStyle={styles.muteBtn}
                             imageSource={require("../../assets/call/details.png")}
                             iconStyle={styles.mtnBtnIcon}
                             onPress={()=>{console.warn('Clicked on details btn')}}/>

            </View>

            <View style={styles.secondRow}>

                <CustomBtn 
                            btnStyle={styles.leaveCallBtn} 
                            text={"Leave call"} 
                            textStyle={styles.leaveText} 
                            onPress={()=>{console.warn('Clicked on leave btn')}}/>

                
                <BtnWithIcon btnStyle={styles.endCallBtn}
                             imageSource={require("../../assets/call/hang_up.png")}
                             iconStyle={styles.endCallBtnIcon}
                             onPress={()=>{console.warn('Clicked on call btn')}}/>

            </View>

        </View>
        

    </View>
    )

};

export default Call;