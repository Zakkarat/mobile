import React, {useState} from 'react';
import {View} from 'react-native';
import {StudentTable} from "./components/StudentTable";
import {DropdownController} from "./components/DropdownController";
import styles from "./styles/AppStyles";
import {data} from "./data/table.json";

export default () => {
    const [table, setTable] = useState(data);
    const [filters, setFilters] = useState({faculty: '', year: ''});

    return (
        <View style={styles.container}>
            <StudentTable table={table}/>
            <DropdownController
                                setTable={setTable}
                                setFilters={setFilters}
                                filters={filters}
            />
        </View>
    );
}
