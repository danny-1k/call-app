import React,{useState} from 'react';
import {Modal,Pressable,View,Text} from 'react-native';
import styles from './styles';
import CustomBtn from '../buttons';


const Alert = (props)=>{
    const [isVisible,setIsVisible] = useState(true);

    return (
        <View>
            <Modal 
                animationType='fade' 
                transparent={true} 
                visible={isVisible} 
                onRequestClose={()=>{
                    setIsVisible(!isVisible);
            }}>

                <Pressable style={styles.backDrop} onPress={()=>{setIsVisible(false)}} />

                <View style={styles.alertBox}>

                    <View style={styles.alertBoxContainer}>
                        <Text style={styles.alertBoxTitle}>{props.title || 'Alert'}</Text>
                        <Text style={styles.alertBoxMessage}>{props.message || ''}</Text>

                        <View style={styles.alertButtons}>
                            
                            <CustomBtn btnStyle={styles.alertButton} textStyle={styles.alertButtonText} text={'Ok'}/>

                        </View>

                    </View>

                </View>


            </Modal>
        </View>
    );

};

export default Alert;