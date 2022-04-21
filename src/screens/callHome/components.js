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


                <View style={{display:'flex',flexDirection:'row'}}>
                    <CustomBtn
                        btnStyle={{...styles.rejoinBtn,...{}}}
                        text={"Rejoin"}
                        textStyle={{...styles.rejoinBtnText,...{color:'#333'}}}
                        onPress={props.onPress}
                    />

                    <CustomBtn
                        btnStyle={{...styles.rejoinBtn,...{backgroundColor:'rgba(241,68,54,.8)'}}}
                        text={"End"}
                        textStyle={{...styles.rejoinBtnText,...{color:'#333'}}}
                        onPress={props.onPress}
                    />
                </View>
            </View>
        </View>

    );

};


export default RecentDetail;