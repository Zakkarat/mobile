import {Button, TextInput} from "react-native";
import React, {Dispatch, SetStateAction} from "react";
import * as DocumentPicker from "expo-document-picker";
import {styles} from "../../styles/styles";

interface IUploadSwitch {
    typeOfEnter: string,
    selectedURL: string,
    setSelectedURL: Dispatch<SetStateAction<string>>
}

export const UploadSwitch = ({typeOfEnter, selectedURL, setSelectedURL}: IUploadSwitch) => {
    const onFilePick = async () => {
        const file = await DocumentPicker.getDocumentAsync();
        if (file.type !== "cancel") {
            setSelectedURL(file.uri);
        }
    }

    switch (typeOfEnter) {
        case "URL":
            return <TextInput style={styles.textInput}
                              value={selectedURL}
                              onChangeText={(text) => setSelectedURL(text)}/>
        case "File":
            return <Button title={"Pick File"} onPress={onFilePick}/>
        default:
            return <></>
    }
}
