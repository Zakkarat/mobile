import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "500",
        textAlign: "center",
        paddingHorizontal: 5,
    },
    button: {
        textAlign: "center",
        margin: 10,
        padding: 10,
        backgroundColor: "#DDDDDD",
    },
    textButton: {
        fontSize: 32
    },
    smallText: {
        fontSize: 14,
        fontWeight: "500"
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
