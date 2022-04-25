import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key,data) =>{
    // String and key MUST be strings

    try{
        await AsyncStorage.setItem(key,data);
    }catch(err){
        // handle error here
    };
};


const storeObject = async (key,data) =>{
    try{
        await AsyncStorage.setItem(key,JSON.stringify(data));
    }catch(err){
        // handle error here
    };
};

const getData = async (key) =>{
    try{
        const data = await AsyncStorage.getItem(key);
        return  data;

    }catch(err){
        // hande error here
    };
};

const getObject = async (key) =>{
    try{
        const data = await AsyncStorage.getItem(key);
        return  data!==null?JSON.parse(data):null;

    }catch(err){
        // hande error here
    };
};


export {storeUser, getUser, storeGoogTokens, getGoogTokens};