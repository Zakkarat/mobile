import React, {useEffect, useState} from 'react';
import {Button, View, Text} from 'react-native';
import {getHistory, storeData} from "../utils/storageUtils";
import {StudentTable} from "./StudentTable";
import styles from '../styles/AppStyles'

export const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const getHistoryData = async () => {
            const history = await getHistory();
            setHistory(history);
        }
        getHistoryData();
    }, []);

    const clearHistory = () => {
        storeData('history', '');
        setHistory([]);
    }

    return (
        <View style={styles.container}>
            <Button disabled={history.length === 0} title={'Clear History'} onPress={clearHistory}/>
            {history.length !== 0 ?
                history.map((table, i) => <StudentTable key={i} table={table}/>) :
                <Text>Storage is empty</Text>}
        </View>
    );
}
