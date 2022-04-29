import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import RecentDetail from './components';
import styles from './styles';
import CustomBtn from '../../components/buttons';

export const HomeScreen = ({navigation}) => {

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
    ];
    
    


  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.callBtns}>
        <CustomBtn
          btnStyle={styles.newCallBtn}
          text={'New call'}
          textStyle={styles.newCallBtnText}
        />

        <CustomBtn
          btnStyle={styles.joinCallBtn}
          text={'Join call'}
          textStyle={styles.joinCallBtnText}
          onPress={() => navigation.navigate('JoinCall')}
        />
      </View>

      <Text style={styles.recentHeader}>Recent Calls</Text>

      <View style={styles.recentCalls}>
        {recents.map(el => {
          return (
            <RecentDetail
              link={el.link}
              timeStamp={el.timeStamp}
              rejoinable={el.rejoinable}
              key={el.id}
            />
          );
        })}
      </View>
    </ScrollView>
  </View>;
};

export const SettingsScreen = ({navigation}) => {
  return (
    <View>
      <Text>Settings page</Text>
    </View>
  );
};
