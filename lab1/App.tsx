import React, {useState} from 'react';
import {View} from 'react-native';
import {StudentTable} from "./components/StudentTable";
import {DropdownController} from "./components/DropdownController";
import styles from "./styles/AppStyles";
import {data} from "./data/table.json";

export default () => {
    const [table, setTable] = useState(data);
    const [filters, setFilters] = useState({faculty: '', year: ''});
    const onTableFacultyFilter = (value) => {
        if (value === 'Select an item...') {
            value = '';
        }
        setFilters({...filters, faculty: value});
    };

    const onTableYearFilter = (value) => {
        if (value === 'Select an item...') {
            value = '';
        }
        setFilters({...filters, year: value});
    };

    const onApply = () => {
        const filteredData = data.body.filter((row) => {
            if (filters.faculty) {
                if (filters.faculty !== row[1]) {
                    return false;
                }
            }
            if (filters.year) {
                if (filters.year !== row[2]) {
                    return false;
                }
            }
            return true
        })
        setTable({...data, body: filteredData});
    };

    const onCancel = () => {
        setTable({...data});
        setFilters({faculty: '', year: ''})
    };

    return (
        <View style={styles.container}>
            <StudentTable table={table}/>
            <DropdownController onTableFacultyFilter={onTableFacultyFilter}
                                onTableYearFilter={onTableYearFilter}
                                onApply={onApply}
                                onCancel={onCancel}
                                filters={filters}
            />
        </View>
    );
}
