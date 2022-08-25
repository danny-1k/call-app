import React, { useRef, useState, useContext, useEffect} from 'react';
import {View,Text, Image} from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView, BottomSheetScrollView,} from '@gorhom/bottom-sheet';

import database from '@react-native-firebase/database';


import FA_Icon  from 'react-native-vector-icons/FontAwesome';
import MC_Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


import CustomBtn, {ButtonWrapper} from '../../components/buttons';

import styles from './styles';

import CallGrid from './components';

import {AuthContext} from '../../contexts/auth';

import {getUserMedia, getMediaStream , createPeerConnection, createOffer} from './call_utils';

import {
    RTCPeerConnection,
    RTCIceCandidate,
    RTCSessionDescription,
    MediaStream,
	MediaStreamTrack,
    mediaDevices,
} from 'react-native-webrtc';


const BottomSheetParticipant = (props) => {

    const participant = props.participant;

    return (
        <View style={{marginBottom:20,marginLeft:20}} key={participant.email}>
            <View style={{ flexDirection:'row', alignItems:'center'}}>
                <Image source={{uri:participant.profilePic}} style={{height:50, width:50, borderRadius:25}} />
                <Text style={{color:'#ccc', fontSize:20, marginLeft:30}}>{participant.name}</Text>
            </View>
        </View>
    );
};




const CallFromOther = gestureHandlerRootHOC((props)=>{


    const {authData} = useContext(AuthContext);

    const joinCode = props.joinCode;
    
    const roomRef = database().ref().child(joinCode);

    const [roomAuthorID, setRoomAuthorID] = useState(null);

    const [participantsList, setParticipantsList] = useState([]);

    const [peerConnection, setPeerConnection] = useState(createPeerConnection());
    const [localStream, setlocalStream] = useState();
    const [remoteStream, setRemoteStream] = useState();

    const [isMuted, setIsMuted] = useState(false);


    // Start local stream


    const startLocalStream = ()=>{

        getUserMedia().then(mediastream=>{
            setlocalStream(mediastream);
            console.log('started local stream');
        });


    };

    const startCall = ()=>{

        let caller = {
            email:authData.email,
            name: authData.name,
            profilePic: authData.photo,
            offer: null,
            answer: null,
        };


        const participantsRef = roomRef.child('participants');
        const callCandidates = roomRef.child('callCandidates');
        const callerCandidates = callCandidates.child(authData.email.split('@')[0]);
        

        peerConnection.addStream(localStream);


        peerConnection.onicecandidate = e => {
            // store room author final candidate here -> e.candidate.toJSON()
            if (!e.candidate){

                return // no more candidates
            }
            console.log('Got candidate');
            
            const new_candidate = callerCandidates.push();
            new_candidate.set(e.candidate.toJSON());
        };




        peerConnection.onaddstream = e => {
            if (e.stream && remoteStream !== e.stream){
                console.log('remote stream')
                setRemoteStream(e.stream);
            };
        };


        participantsRef.on('value', snapshot=>{
            const data = snapshot.val();

            const participantID = Object.keys(data)[0];

            const participant = data[participantID];

            console.log(participantID);

            // console.log(data);

            // data.forEach(participant => {
                // create answers to offers

                if (participant.email !== authData.email){
                    console.log('other participant', participant.email);

                    const offer = participant.offer;
                    const participantRef = participantsRef.child(`${participant.key}`);

                    peerConnection.setRemoteDescription(new RTCSessionDescription(offer)).then(()=>{

                        peerConnection.createAnswer().then(answer=>{

                            peerConnection.setLocalDescription(answer);

                            console.log('created answer');

                            caller.answer = answer;

                            const new_participant = participantRef.push()
                            new_participant.set(caller);



                            callCandidates.on('value', snapshot=>{

                                const data = snapshot.val();
                    
                                const username = Object.keys(data)[0];
                    
                                if (username !== authData.email.split('@')[0]){
                    
                                    callCandidates.child(username).on('value', snapshot => {
                    
                                        const data = snapshot.val();
                    
                                        console.log('Got remote ICE candidate');
                    
                                        peerConnection.addIceCandidate(new RTCIceCandidate(data));
                    
                                    });
                    
                    
                                };
                                
                    
                            });


                        }).catch(err=>{
                            // error handling goes here :()
                        });


                    }).catch(err=>{
                        // poor error handling fuck me :()
                    });

                };
            // });
        });



        // localPC.createOffer().then(res=>{
        //     const offer = res;

        //     localPC.setLocalDescription(offer).then(()=>{
        //         caller.offer = offer;

        //         participantsRef.push();
        //         participantsRef.set([caller]);


                    
        //         // useEffect(()=>{

        //         participantsRef.on('child_added', async snapshot=>{


            
        //             const data = snapshot.val();
        //             console.log(data.email, authData.email);

        //             if(data.email != authData.email){ // someone else has entered the chat
        //                 console.log('someone else')

        //                 const answer = data.answer;
        //                 const iceCandidate = data.iceCandidate;
                    
                    
        //                 await localPC.setRemoteDescription( new RTCSessionDescription(answer));
        //                 await localPC.addIceCandidate(new RTCIceCandidate(iceCandidate));
        //             }
                    
            
        //         });
            

        //     }).catch((err)=>{
        //         console.log('failed to set local description', err)
        //     });




        // }).catch((err)=>{

        //     console.log('Failed to create offer', err.msg)
    
        // });

    };

    const bottomSheetRef = useRef(null);
    const snapPoints = [130,'60%'];


    

    return (

    <View style={styles.container}>


        <View style={styles.callParticipantsContainer}>

            {/* <CallGrid num={2} dim={300}/> */}

            <CustomBtn textStyle={{}} btnStyle={{padding:10, backgroundColor:'#fff'}} text={"Start local stream"} onPress={startLocalStream}/>

            <CustomBtn textStyle={{}} btnStyle={{padding:10, backgroundColor:'#fff'}} text={"Join call"} onPress={startCall}/>


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

                {
                    participantsList.map(participant => {
                        return (
                            <BottomSheetParticipant participant={participant} key={participant.email}/>
                                
                        );
                    })
                }

            </BottomSheetScrollView>

        </BottomSheet>
        

    </View>
    )

});

export default CallFromOther;