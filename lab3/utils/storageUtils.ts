import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async (key) => {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
        return value;
    }
    return '';
}
export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e);
    }
}

export const addToHistory = async (table) => {
    const history = await getHistory();
    const newData = {history: []};
    if (history) {
        newData.history = [...history]
    }
    newData.history.push(table);
    storeData('history', JSON.stringify(newData));
}

export const getHistory = async () => {
    const data = await getData('history');
    if (data) {
        return JSON.parse(data).history;
    }
    return '';
}