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

const getData = (key) =>{
    return AsyncStorage.getItem(key);
};

export {storeData, storeObject, getData};