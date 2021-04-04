import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {data} from "../data/table.json";
import {addToHistory} from "../utils/storageUtils";
import {StudentTable} from "./StudentTable";
import {DropdownController} from "./DropdownController";
import styles from '../styles/AppStyles'

export const TableWithFilters = () => {
    const [table, setTable] = useState(data);
    const [filters, setFilters] = useState({faculty: '', year: ''});

    const onSave = () => {
        addToHistory(table);
    };

    return (
        <View >
            <StudentTable table={table}/>
            <DropdownController
                setTable={setTable}
                setFilters={setFilters}
                filters={filters}
                onSave={onSave}
            />
        </View>
    );
}
