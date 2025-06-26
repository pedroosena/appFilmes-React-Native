import { StyleSheet } from "react-native";

const getstyles = ( colors ) => StyleSheet.create({
    container: {
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 14,
        marginTop: 15
    },
    menuButton: {
        height: 70, 
        alignItems: "center",
        flexDirection: "row"
    },
    title: {
        color: colors.text,
        fontSize: 30, 
        fontWeight: "bold",
        marginLeft: 8,
    }
})

export default getstyles;