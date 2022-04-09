import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import CustomBtn from '../../components/buttons';
import styles from './styles';
import RecentDetail from './components';

const recents = [
    {   
        id:0,
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:true,
    },
    {
        id:1,
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:false,
    },
    {
        id:2,
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:false,
    },
    {
        id:3,
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:true,
    },
    {
        id:4,
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:true,
    },
    {   
        id:5,
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:false,
    },
    {
        id:6,
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:true,
    },
    {
        id:7,
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:false,
    },
    {
        id:8,
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:false,
    },
    {
        id:9,
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:true,
    },
    {
        id:10,
        link: "xcjwjerm",
        timeStamp: "Just Now",
        rejoinable:false,
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



            <ScrollView showsVerticalScrollIndicator={false}>

            <Text style={styles.recentHeader}>Recent Calls</Text>

                <View style={styles.recentCalls}>

                    {

                        recents.map((el)=>{
                            return <RecentDetail link={el.link} timeStamp={el.timeStamp} rejoinable={el.rejoinable} key={el.id}/>
                        })

                    }
                </View>
                

            </ScrollView>


        </View>
    );
};

export default CallHome;