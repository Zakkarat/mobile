import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Picker from "react-native-picker-select";
import stylesDrop from "../styles/DropdownControllerStyles";
import {styles} from "../styles/styles";
import {UploadSwitch} from "./Switchers/UploadSwitch";

export const PlayerGuard = ({route, setURL}:{route:string, setURL:Dispatch<SetStateAction<string>>}) => {
    const [typeOfEnter, setTypeOfEnter] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedURL, setSelectedURL] = useState('');

    const types = ["URL", "File"].map(elem => ({label: elem, value:elem}));

    const applyChanges = () => {
        if(selectedType) {
            setTypeOfEnter(selectedType);
        }
        if(selectedURL) {
            setURL(selectedURL);
        }
    }

    return (
        <View>
            {!typeOfEnter &&
        <>
            <Text style={styles.PlayerBlockText}>Choose input format:</Text>
            <Picker
            style={stylesDrop}
            onValueChange={(value) => setSelectedType(value)}
            items={types}
            value={selectedType}
            placeholder={{label: 'Select a Type...', value:''}}
            />
        </>
        }
            <UploadSwitch typeOfEnter={typeOfEnter} selectedURL={selectedURL} setSelectedURL={setSelectedURL} />
            <Button title={'Apply'} onPress={applyChanges}/>
        </View>
    );
}
