import React from 'react';
import {View, Image} from 'react-native';


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
};

export default CallGrid;