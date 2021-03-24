import React from "react";
import {Button, View, Text} from "react-native";
import Picker from "react-native-picker-select";
import {IDropdownControllerProps} from "../interfaces/IDropdownControllerProps";
import {data} from "../data/table.json";
import filtrateTable from "../helpers/filtrateTable";
import styles from "../styles/DropdownControllerStyles";

export const DropdownController = ({onTableFacultyFilter, onTableYearFilter, onApply, onCancel, filters}:IDropdownControllerProps) => {
    const filteredFaculties = filtrateTable(data.body, 1);
    const filteredYears = filtrateTable(data.body, 2);

    return (
        <View>
            <Text style={{fontSize:24, paddingTop:5, fontWeight:"500"}}>Faculty:</Text>
            <Picker
                style={styles}
                onValueChange={onTableFacultyFilter}
                items={filteredFaculties}
                value={filters.faculty}
                placeholder={{label: 'Select a Faculty...', value:''}}
            />
            <Text style={{fontSize:24, paddingTop:5, fontWeight:"500"}}>Year:</Text>
            <Picker
                style={styles}
                onValueChange={onTableYearFilter}
                items={filteredYears}
                value={filters.year}
                placeholder={{label: 'Select a Year...', value:''}}
            />
            <Button title={"Apply"} onPress={onApply} />
            <Button title={"Cancel"} onPress={onCancel} />
        </View>
    );
}