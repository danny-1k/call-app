import React from 'react';
import {View,Text,Image} from 'react-native';

import styles from './styles';


const Call = ()=>{

    return (

    <View style={styles.container}>

        <Image style={styles.callPic} source={require('./../../assets/call/profilepic.jpg')}>

        </Image>


        <View style={styles.callButtons}>

            <View style={styles.firstRow}>

                <View style={styles.muteBtn}></View>
                <View style={styles.detailsBtn}></View>

            </View>

            <View style={styles.secondRow}>

                <View style={styles.leaveCallBtn}>
                    <Text style={styles.leaveText}>Leave</Text>
                </View>
                <View style={styles.endCallBtn}></View>

            </View>

        </View>
        

    </View>
    )

};

export default Call;