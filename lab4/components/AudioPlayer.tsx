import React, {useEffect, useState} from 'react';
import {Button, View} from 'react-native';
import {Audio} from 'expo-av';

export const AudioPlayer = ({url}:{url:string}) => {
    const [sound, setSound] = useState({} as any);
    const [status, setStatus] = React.useState({} as any);


    useEffect(() => {
       const setNewSound = async () => {
           const { sound } = await Audio.Sound.createAsync(
               { uri: url },
               { shouldPlay: false }
           );
           setSound(sound);
       }
       setNewSound();
    },[])


    return (
        <View>
            <Button
                title={status.isPlaying ? 'Pause' : 'Play'}
                onPress={() => {
                    if (status.isPlaying) {
                        setStatus({isPlaying: false})
                        sound.pauseAsync();
                    } else {
                        setStatus({isPlaying: true})
                        sound.playAsync();
                    }
                }
                }
            />
            <Button title={"Stop"} onPress={() => {
                setStatus({isPlaying: false})
                sound.stopAsync()
            }}/>
        </View>
    );
}
