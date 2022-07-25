import React from 'react';
import {View, Image, Text} from 'react-native';


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
    const width = cell_dim;

    return (

        <View style={{width:dim,height:dim,flexWrap:'wrap',flexDirection:'column',justifyContent:'space-around',}}>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                {
                [...Array(num)].map(
                    (e,i)=>{
                        return (
                            <View key={i} style={{ width: 165-15, height: 232, borderWidth:3, borderColor:'#106BE4', borderRadius:15, backgroundColor:'rgba(22,25,15,.65)',flexDirection:'column', justifyContent:'space-between'}}>
                                <Text style={{fontSize:30, fontWeight:'600', color:'#106BE4', marginLeft:15}}>You</Text>
                                <View style={{marginBottom:15, flexDirection:'row', justifyContent:'space-around',alignItems:'center'}} >
                                    <Image style={{width:47,height:47, borderRadius:47/2}} source={require('./../../assets/call/profilepic.jpg')}></Image>
                                    <View style={{height:30, width:67, backgroundColor:'red'}}></View>
                                </View>
                                {/* <Image key={i} style={{width:cell_dim,height:cell_dim,}} source={require('./../../assets/call/profilepic.jpg')}></Image> */}
                            </View>
                        );

                    })
                }
            </View>

            

        </View>

    );
};

export default CallGrid;