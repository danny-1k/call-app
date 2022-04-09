import React from 'react';
import {View,Text} from 'react-native';
import CustomBtn from '../../components/buttons';
import styles from './styles';
import RecentDetail from './components';

const recents = [
    {
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:true,
    },
    {
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:false,
    },
    {
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:true,
    },
]

const CallHome = ({navigation})=>{
    return (
        <View style={styles.container}>

            <View style={styles.callBtns}>

                <CustomBtn 
                    btnStyle={styles.newCallBtn}
                    text={"New call"}
                    textStyle={styles.newCallBtnText}
                    />

                <CustomBtn 
                    btnStyle={styles.joinCallBtn}
                    text={"Join call"}
                    textStyle={styles.joinCallBtnText}
                    onPress={()=>navigation.navigate('JoinCall')}
                    />

            </View>

            <Text style={styles.recentHeader}>Recent Calls</Text>

            <View style={styles.recentCalls}>

            {

                recents.map((el)=>{
                    return <RecentDetail link={el.link} timeStamp={el.timeStamp} rejoinable={el.rejoinable}/>
                })
            } 


            </View>

        </View>
    );
};

export default CallHome;