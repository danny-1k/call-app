import React from 'react';
import {View, Text} from 'react-native';

export const HomeScreen = ({navigation}) => {
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
