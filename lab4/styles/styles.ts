import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "500",
        textAlign: "center",
        paddingHorizontal: 5,
    },
    button: {
        borderRadius: 20,
        textAlign: "center",
        margin: 10,
        padding: 10,
        backgroundColor: "#375cb1",
    },
    textButton: {
        color: "#fff",
        fontSize: 32
    },
    smallText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff"
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
    PlayerBlockText: {
        fontSize: 16,
        paddingTop: 5,
        fontWeight: "500",
        textAlign:"center"
    },
    textInput: {
        borderStyle:"solid",
        borderWidth: 1,
        borderRadius: 20,
        fontSize: 24,
        marginBottom: 10
    }
});
