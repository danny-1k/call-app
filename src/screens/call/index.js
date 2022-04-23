import React from 'react';
import {View,Text,Image} from 'react-native';
import CustomBtn, {BtnWithIcon} from '../../components/buttons';

import styles from './styles';

const isSquare = (num)=>{
    return (num**.5)-Math.floor(num**.5) === 0;
};

const findNearestSquare = (num)=>{
    while (true){
        if(isSquare(num)){
            return num;
        };

        num+=1

    };
};


const CallGrid = ({num,dim})=>{

    const cell_dim = Math.floor(((dim**2)/findNearestSquare(num))**.5);

    return (

        <View style={{width:dim,height:dim,flexWrap:'wrap',flexDirection:'column',justifyContent:'space-around',}}>

            <View style={{flexWrap:'wrap',flexDirection:'row', alignSelf:'center'}}>

                {
                [...Array(num)].map(
                    (e,i)=>{
                        return <Image key={i} style={{width:cell_dim,height:cell_dim,}} source={require('./../../assets/call/profilepic.jpg')}></Image>
                    })
                }
            </View>

            

        </View>

    );
}


const Call = ()=>{

    return (

    <View style={styles.container}>


        <View style={styles.callMembersContainer}>

        <CallGrid num={1} dim={300}/>

        </View>


        <View style={styles.callButtons}>

                <BtnWithIcon btnStyle={styles.muteBtn}
                    imageSource={require("../../assets/call/mic.png")}
                    iconStyle={styles.mtnBtnIcon}
                    onPress={()=>{console.warn('Clicked on mute btn')}}/>

                <BtnWithIcon btnStyle={styles.endCallBtn}
                    imageSource={require("../../assets/call/hang_up.png")}
                    iconStyle={styles.endCallBtnIcon}
                    onPress={()=>{console.warn('Clicked on call btn')}}/>

                <CustomBtn 
                    btnStyle={styles.leaveCallBtn} 
                    text={"Leave call"} 
                    textStyle={styles.leaveText} 
                    onPress={()=>{console.warn('Clicked on leave btn')}}/>


        </View>
        

    </View>
    )

};

export default Call;