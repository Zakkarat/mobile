import React, {useEffect, useState} from "react";
import {Button, View, Text} from "react-native";
import {IDropdownControllerProps} from "../interfaces/IDropdownControllerProps";
import {data} from "../data/table.json";
import filtrateTable from "../helpers/filtrateTable";
import {TextPicker} from "./TextPicker";

export const DropdownController = ({setTable, setFilters, filters, onSave}:IDropdownControllerProps) => {
    const filteredFaculties = filtrateTable(data.body, 1);
    const filteredYears = filtrateTable(data.body, 2);
    const [isSaved, setIsSaved] = useState(false);


    const onTableFacultyFilter = async (value) => {
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

    const onApply = async () => {
        setIsSaved(false);
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

    const onCancel = async () => {
        setIsSaved(false);
        setTable({...data});
        setFilters({faculty: '', year: ''});
    };

    const onSaveClick = async () => {
        setIsSaved(true);
        onSave();
    };

    return (
        <View>
            <TextPicker onTableDataFilter={onTableFacultyFilter} filteredData={filteredFaculties}
                        chosen={filters.faculty} defaultLabel={'Select a Faculty...'} describeText={'Faculty'}/>
            <TextPicker onTableDataFilter={onTableYearFilter} filteredData={filteredYears} chosen={filters.year}
                        defaultLabel={'Select a Year...'} describeText={'Year'}/>
            <Button title={"Apply"} onPress={onApply}/>
            <Button title={"Cancel"} onPress={onCancel}/>
            <Button title={"Save Table to History"} onPress={onSaveClick}/>
            <Text>{isSaved && 'Your table is saved now'}</Text>
        </View>
    );
};