import React, {Dispatch, SetStateAction, useState} from 'react';
import {View} from 'react-native';
import {VideoPlayer} from "./VideoPlayer";
import {AudioPlayer} from "./AudioPlayer";
import {PlayerGuard} from "./PlayerGuard";

export const Switch = ({route}:{route:string}) => {
    const [URL, setURL] = useState('');
    const isGuardSatisfied = URL;
    return (
        <View>
            {isGuardSatisfied ?
                route === "Video" ? <VideoPlayer URL={URL}/> : <AudioPlayer url={URL}/>
            :
                <PlayerGuard route={route} setURL={setURL}/>
                }
        </View>
    );
}
