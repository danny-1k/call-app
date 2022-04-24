import React,{useState} from 'react';
import {Modal,Pressable} from 'react-native';
import styles from './styles';


const Alert = (props)=>{
    const [isVisible,setIsVisible] = useState(false);

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


                    </View>

                </View>


            </Modal>
        </View>
    );

};

export default Alert;