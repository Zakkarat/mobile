import React from "react";
import {Button, View} from "react-native";
import {IDropdownControllerProps} from "../interfaces/IDropdownControllerProps";
import {data} from "../data/table.json";
import filtrateTable from "../helpers/filtrateTable";
import {TextPicker} from "./TextPicker";

export const DropdownController = ({setTable, setFilters, filters}:IDropdownControllerProps) => {
    const filteredFaculties = filtrateTable(data.body, 1);
    const filteredYears = filtrateTable(data.body, 2);

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
            return true;
        });
        setTable({...data, body: filteredData});
    };

    const onCancel = () => {
        setTable({...data});
        setFilters({faculty: '', year: ''});
    };

    return (
        <View>
            <TextPicker onTableDataFilter={onTableFacultyFilter} filteredData={filteredFaculties}
                        chosen={filters.faculty} defaultLabel={'Select a Faculty...'} describeText={'Faculty'}/>
            <TextPicker onTableDataFilter={onTableYearFilter} filteredData={filteredYears} chosen={filters.year}
                        defaultLabel={'Select a Year...'} describeText={'Year'}/>
            <Button title={"Apply"} onPress={onApply}/>
            <Button title={"Cancel"} onPress={onCancel}/>
        </View>
    );
};