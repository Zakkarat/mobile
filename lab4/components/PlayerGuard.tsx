import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Picker from "react-native-picker-select";
import styles from "../styles/DropdownControllerStyles";
import * as DocumentPicker from 'expo-document-picker';

export const PlayerGuard = ({route, setURL}:{route:string, setURL:Dispatch<SetStateAction<string>>}) => {
    const [typeOfEnter, setTypeOfEnter] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedURL, setSelectedURL] = useState('');

    const types = ["URL", "File"].map(elem => ({label: elem, value:elem}));

    const applyChanges = () => {
        if(selectedType) {
            setTypeOfEnter(selectedType);
        }
        console.log(selectedURL);
        if(selectedURL) {
            setURL(selectedURL);
        }
    }

    const onFilePick = async () => {
        const file = await DocumentPicker.getDocumentAsync();
        console.log(file);
        if (file.type !== "cancel") {
            setSelectedURL(file.uri);
        }
    }

    return (
        <View>
            {!typeOfEnter &&
        <>
            <Text style={{fontSize: 12, paddingTop: 5, fontWeight: "500"}}>Choose your input type:</Text>
            <Picker
            style={styles}
            onValueChange={(value) => setSelectedType(value)}
            items={types}
            value={selectedType}
            placeholder={{label: 'Select a Type...', value:''}}
            />
        </>
        }
            {!!typeOfEnter ? typeOfEnter === "URL" ?
                <TextInput style={{borderStyle:"solid"}} value={selectedURL} onChangeText={(text) => setSelectedURL(text)}/>
            :
                <Button title={"Pick File"} onPress={onFilePick}/>
            : <></>}
            <Button title={'Apply'} onPress={applyChanges}/>
        </View>
    );
}
