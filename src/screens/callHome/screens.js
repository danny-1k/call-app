import React, {useContext, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import RecentDetail from './components';
import styles from './styles';
import CustomBtn from '../../components/buttons';
import database from '@react-native-firebase/database';
import { AuthContext } from '../../contexts/auth';



export const HomeScreen = ({navigation}) => {

    const {authData} = useContext(AuthContext);

    const dbRef = database().ref();

    const [rooms, setRooms] = useState([]);

    dbRef.orderByChild('author/email').equalTo(authData.email).once('value',(snapshot)=>{

      setRooms(snapshot.map(el=>{
        return {code: el.key, timeStamp: snapshot.val().timestamp, joinable: true};
      }));
        // setRooms([...rooms, {id: rooms.length, code: snapshot.key, timeStamp: snapshot.val().timestamp, joinable: false}]);
    });


  return (
    

    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.callBtns}>
          <CustomBtn
            btnStyle={styles.newCallBtn}
            text={'New call'}
            textStyle={styles.newCallBtnText}
            onPress={() => navigation.navigate('NewCall')}
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
          {rooms.map(el => {
            return (
              <RecentDetail
                link={el.code}
                timeStamp={el.timeStamp}
                rejoinable={el.rejoinable}
                key={el.id}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>

  );
};

export const SettingsScreen = ({navigation}) => {
  return (
    <View>
      <Text>Settings page</Text>
    </View>
  );
};
