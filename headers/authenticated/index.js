import React from "react";
import {View,Text,Image} from "react-native";
import styles from "./styles";


const Header = ()=>{

    return (
        <View style={styles.header}>
            <Text style={styles.menu}>Menu</Text>
            
            <View>
                <Image source={require("../../assets/call/profilepic.jpg")} style={styles.profilepic}/>

            </View>
        </View>
    );

};

export default Header;