import React, { useState, useContext} from 'react';
import {Text, View} from 'react-native';
import database from '@react-native-firebase/database';
import {AuthContext} from '../../contexts/auth';

import CallFromCaller from './callfromcaller';
import CallFromOther from './callfromother';

const Loading = ()=>{

    return (
        <View style={{flex:1, justifyContent:'center', alignContent: 'center'}}>
            <Text style={{fontSize: 60}}>Loading ...</Text>
        </View>

    );
};


const Call = (props)=>{


    const {authData} = useContext(AuthContext);

    const joinCode = props.joinCode;
    
    const roomRef = database().ref().child(joinCode);

    const [isCaller, setIsCaller] = useState(null);


    roomRef.once('value').then(snapshot =>{
        // console.log('hahshahsh')
        const data = snapshot.val();

        setIsCaller(data.author.email === authData.email);
    }).catch(err=>{
        console.log('an error occured', err)
    });

    return (

        (isCaller===null) ? <Loading/> :
         (isCaller === true) ?  <CallFromCaller joinCode={joinCode} /> : <CallFromOther joinCode={joinCode} />
    );


};

export default Call;