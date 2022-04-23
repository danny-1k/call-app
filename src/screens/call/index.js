import React from 'react';
import {View,Text,Image} from 'react-native';
import CustomBtn, {BtnWithIcon} from '../../components/buttons';

import styles from './styles';

import CallGrid from '../../components/callgrid';



const Call = ()=>{

    return (

    <View style={styles.container}>


        <View style={styles.callParticipantsContainer}>

        <CallGrid num={1} dim={300}/>

        </View>


        <View style={styles.callButtons}>

                <BtnWithIcon btnStyle={styles.muteBtn}
                    imageSource={require("../../assets/call/mic.png")}
                    iconStyle={styles.mtnBtnIcon}
                    onPress={()=>{console.warn('Clicked on mute btn')}}/>

                <BtnWithIcon btnStyle={styles.endCallBtn}
                    imageSource={require("../../assets/call/hang_up.png")}
                    iconStyle={styles.endCallBtnIcon}
                    onPress={()=>{console.warn('Clicked on call btn')}}/>

                <CustomBtn 
                    btnStyle={styles.leaveCallBtn} 
                    text={"Leave call"} 
                    textStyle={styles.leaveText} 
                    onPress={()=>{console.warn('Clicked on leave btn')}}/>


        </View>
        

    </View>
    )

};

export default Call;