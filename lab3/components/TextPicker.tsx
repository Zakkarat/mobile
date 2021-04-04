import React from "react";
import {View, Text} from "react-native";
import Picker from "react-native-picker-select";
import styles from "../styles/DropdownControllerStyles";
import {ITextPicker} from "../interfaces/ITextPicker";

export const TextPicker = ({onTableDataFilter, filteredData, chosen, defaultLabel, describeText}:ITextPicker) =>
    (
        <View>
            <Text style={{fontSize:24, paddingTop:5, fontWeight:"500"}}>{describeText}:</Text>
            <Picker
                style={styles}
                onValueChange={onTableDataFilter}
                items={filteredData}
                value={chosen}
                placeholder={{label: defaultLabel, value:''}}
            />
        </View>
    );
