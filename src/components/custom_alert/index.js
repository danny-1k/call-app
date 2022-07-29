import React,{useState} from 'react';
import {Modal,Pressable,View,Text} from 'react-native';
import styles from './styles';
import CustomBtn, {ButtonWrapper} from '../buttons';
import FA_Icon  from 'react-native-vector-icons/FontAwesome';



const Alert = (props)=>{

    const isVisible = props.isVisible;
    const setIsVisible = props.setIsVisible;

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
                            
                            <CustomBtn btnStyle={styles.alertButton} textStyle={styles.alertButtonText} text={'Ok'} onPress={()=>{setIsVisible(false)}}/>

                        </View>

                    </View>

                </View>


            </Modal>
        </View>
    );

};

export const Info = (props) =>{
    const isVisible = props.isVisible;
    const setIsVisible = props.setIsVisible;
    const onClose = props.onClose;

    return (
        <View>
            <Modal 
                animationType='fade' 
                transparent={true} 
                visible={isVisible} 
                onRequestClose={()=>{
                    setIsVisible(!isVisible);
            }}>

                <Pressable style={styles.backDrop} onPress={()=>{onClose();setIsVisible(false)}} />

                <View style={styles.alertBox}>

                    <View style={styles.alertBoxContainer}>
                        <View>
                            
                            <ButtonWrapper onPress={()=>{onClose();setIsVisible(false)}} btnStyle={styles.infoCloseButton}>
                                <FA_Icon name='close' size={20} color='gray'/>
                            </ButtonWrapper>

                        </View>
                        <View style={styles.alertBoxMessage}>
                            {props.children}
                        </View>


                    </View>

                </View>


            </Modal>
        </View>
    );
};

export default Alert;