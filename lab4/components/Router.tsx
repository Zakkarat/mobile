import React, {Dispatch, SetStateAction, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from "../styles/styles";

export const Router = ({route, setRoute}:{route:string, setRoute: Dispatch<SetStateAction<string>>}) => {
    const options = ["Video", "Audio"]

    return (
        <View>
            {!route ? (<>
            <Text style={styles.text}>Choose type of file you want to interact with:</Text>
            {options.map(option => (
                <TouchableOpacity style={styles.button} onPress={() => setRoute(option)}>
                    <Text style={styles.textButton}>{option}</Text>
                </TouchableOpacity>
            ))}
            </>)
                :
                <TouchableOpacity style={styles.button} onPress={() => setRoute("")}>
                    <Text style={styles.smallText}>Home</Text>
                </TouchableOpacity>
            }
        </View>
    );
}