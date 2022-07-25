import {
    RTCPeerConnection,
    RTCIceCandidate,
    RTCSessionDescription,
    MediaStream,
	MediaStreamTrack,
    mediaDevices,
} from 'react-native-webrtc';

import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';


const peerConstraints = {
    iceServers: [{
        urls: [
            'stun:stun1.l.google.com:19302',
            'stun:stun2.l.google.com:19302',
            'stun:stun.l.google.com:19302',
            'stun:stun3.l.google.com:19302',
            'stun:stun4.l.google.com:19302',
            'stun:stun.services.mozilla.com',
        ],

    }],

    iceCandidatePoolSize: 10,
};


const mediaConstraints = {
    audio:true,
    video:false,
};



export const getUserMedia = ()=>{

    // check permission status of audio recording
    // if recording audio is denied, request for permission

    check(PERMISSIONS.ANDROID.RECORD_AUDIO).then(res=>{
        switch (res){

            case RESULTS.DENIED:
                request(PERMISSIONS.ANDROID.RECORD_AUDIO).then(res=>{

                });

        };
    }).catch(err=>{
        //handle error here 
        console.log(err);
    });

    return mediaDevices.getUserMedia(mediaConstraints);
    
};



export const createPeerConnection = ()=>{

    const peerConnection = new RTCPeerConnection(peerConstraints);

    return peerConnection;

};


export const createOffer = async (peerConnection, participantRef, roomAuthorID)=>{

    peerConnection.onicecandidate  = event=>{

        event.candidate && participantRef.child('offerCandidates').push({...event.candidate.toJSON(), authorID: roomAuthorID});

    };


    const offerDescription = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offerDescription);

    const offer = {
        sdp:offerDescription.sdp,
        type:offerDescription.type,
        authorID:roomAuthorID,
    };

    await participantRef.child('offers').push().set({offer});

};


export const createListeners = async(peerConnection, participantRef, roomAuthorID)=>{

    participantRef.child('offers').on('child_added', snapshot=>{

        const data = snapshot.val();

        if (data?.offer){
            peerConnection.setRemoteDescription(new RTCSessionDescription(data.offer));
            createAnswer(peerConnection, participantRef, roomAuthorID);

        };

    });


    participantRef.child('offerCandidates').on('child_added', snapshot=>{

        const data = snapshot.val();

        if (data?.roomAuthorID){
            peerConnection.addIceCandidate(new RTCIceCandidate(data));

        };

    });


    participantRef.child('answers').on('child_added', snapshot=>{

        const data = snapshot.val();

        if (data?.answer){
            peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));

        };

    });


    participantRef.child('answerCandidates').on('child_added', snapshot=>{

        const data = snapshot.val();

        if (data?.roomAuthorID){
            peerConnection.addIceCandidate(new RTCIceCandidate(data));

        };

    });



};


export const createAnswer = async (peerConnection, participantRef, roomAuthorID)=>{

    peerConnection.onicecandidate = event=>{
        event.candidate && participantRef.child('answerCandidates').push({...event.candidate.toJSON(), authorID: roomAuthorID});
    };

    const answerDescription = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answerDescription);

    const answer = {
        type:answerDescription.type,
        sdp:answerDescription.sdp,
        participantID: roomAuthorID,
    };

    await participantRef.child('answers').push().set({answer});

};