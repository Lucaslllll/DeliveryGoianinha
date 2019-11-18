// Importing AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (storage_key, stored_value) => {
  try {
    await AsyncStorage.setItem(`${storage_key}`, `${stored_value}`);
  } catch (e) {
  }
};

export const getData = async storage_key => {
  try {
    const value = await AsyncStorage.getItem(`${storage_key}`);
    console.log(value);
    return value;
  } catch (e) {}
};

export const deleteItem = async storage_key => {
  try {
    await AsyncStorage.removeItem(storage_key);
  } catch (err) {}
};


