import React, { useRef} from 'react';
import {View,Text, Image} from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView, BottomSheetScrollView} from '@gorhom/bottom-sheet';

import FA_Icon  from 'react-native-vector-icons/FontAwesome';
import MC_Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


import {ButtonWrapper} from '../../components/buttons';

import styles from './styles';

import CallGrid from '../../components/callgrid';



const Call = gestureHandlerRootHOC(()=>{

    const bottomSheetRef = useRef(null);
    const snapPoints = [130,'60%'];


    return (

    <View style={styles.container}>


        <View style={styles.callParticipantsContainer}>

            <CallGrid num={1} dim={300}/>

        </View>


        <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints} backgroundStyle={{backgroundColor:'rgba(29,29,29,.5)'}}>
            
            <BottomSheetView style={styles.callButtons}> 

                <ButtonWrapper onPress={()=>{console.warn('You pressed me')}} btnStyle={{...styles.speaker, ...styles.callBtn}}>
                    <FA_Icon name='volume-up' size={40} color='#fff'/>
                </ButtonWrapper>

                <ButtonWrapper onPress={()=>{console.warn('You pressed me')}} btnStyle={{...styles.mute, ...styles.callBtn}}>
                    <FA_Icon name='microphone-slash' size={40} color='#fff'/>
                </ButtonWrapper>

                <ButtonWrapper onPress={()=>{console.warn('You pressed me')}} btnStyle={{...styles.hangup, ...styles.callBtn}}>
                    <MC_Icon name='phone-hangup' size={40} color='#fff'/>
                </ButtonWrapper>

            </BottomSheetView>

            <BottomSheetScrollView>

                <Text style={{color:'#fff', fontSize:25, marginTop:10, marginLeft:20, marginBottom:30, }}>
                    Participants
                </Text>



                <View style={{marginBottom:20,marginLeft:20}}>
                    <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../../assets/call/profilepic.jpg')} style={{height:50, width:50, borderRadius:25}} />
                        <Text style={{color:'#ccc', fontSize:20, marginLeft:30}}>Daniel Ik</Text>
                    </View>
                </View>

                <View style={{marginBottom:20,marginLeft:20}}>
                    <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../../assets/call/profilepic.jpg')} style={{height:50, width:50, borderRadius:25}} />
                        <Text style={{color:'#ccc', fontSize:20, marginLeft:30}}>Daniel Ik</Text>
                    </View>
                </View>

                <View style={{marginBottom:20,marginLeft:20}}>
                    <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../../assets/call/profilepic.jpg')} style={{height:50, width:50, borderRadius:25}} />
                        <Text style={{color:'#ccc', fontSize:20, marginLeft:30}}>Daniel Ik</Text>
                    </View>
                </View>

                <View style={{marginBottom:20,marginLeft:20}}>
                    <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../../assets/call/profilepic.jpg')} style={{height:50, width:50, borderRadius:25}} />
                        <Text style={{color:'#ccc', fontSize:20, marginLeft:30}}>Daniel Ik</Text>
                    </View>
                </View>

            </BottomSheetScrollView>

        </BottomSheet>
        

    </View>
    )

});

export default Call;