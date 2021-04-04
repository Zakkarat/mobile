import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {TableWithFilters} from "./components/TableWithFilters";
import {History} from "./components/History";
import styles from "./styles/AppStyles";

export default () => {
    const [isHistory, setIsHistory] = useState(false);

    const changeRoute = () => {
        setIsHistory(!isHistory);
    }
    return (
        <View style={styles.container}>
            <Button title={isHistory ? 'Go Back' : 'Check History'} onPress={changeRoute}/>
            {
                isHistory ?
                <History /> :
                <TableWithFilters />
            }
        </View>
    );
}
