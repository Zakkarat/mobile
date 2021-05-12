import {Button, TextInput} from "react-native";
import React, {Dispatch, SetStateAction} from "react";
import {Switch} from "../Switch";

interface IRouterSwitch {
    route:string
}

export const RouteSwitch = ({route}: IRouterSwitch) => {
    if (route) {
        return <Switch route={route}/>
    } else {
        return <></>
    }
}
