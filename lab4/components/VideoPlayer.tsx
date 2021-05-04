import React, {Dispatch, SetStateAction, useState} from 'react';
import {Button, View} from 'react-native';
import {styles} from "../styles/styles";
import {AVPlaybackStatus, Video} from "expo-av";

export const VideoPlayer = ({URL}:{URL:string}) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({} as any);

    return (
        <View>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: URL
                }}
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <Button
                title={status.isPlaying ? 'Pause' : 'Play'}
                onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }
            />
            <Button title={"Stop"} onPress={() => video.current.stopAsync()}/>
        </View>
    );
}
