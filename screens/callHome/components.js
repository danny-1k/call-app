import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';

import CustomBtn from '../../components/buttons';


const RecentDetail = (props)=>{

    return (
        <View style={styles.recentDetail}>
            <View style={styles.recentDetailContainer}>
                <View style={styles.firstRow}>
                            
                    <Text style={styles.linkName}>{props.link}</Text>
                    <Text style={styles.timeStamp}>{props.timeStamp}</Text>

                </View>

                        
                {props.rejoinable && <CustomBtn
                    btnStyle={styles.rejoinBtn}
                    text={"Rejoin"}
                    textStyle={styles.rejoinBtnText}
                    onPress={props.onPress}
                />}
            </View>
        </View>

    );

};


export default RecentDetail;