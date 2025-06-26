import { StyleSheet } from "react-native";
import { rgbaColor } from "react-native-reanimated/lib/typescript/Colors";

const getStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        width: '100%',
        marginTop: 35,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 14,
        alignItems: 'center'
    },
    headerButton: {
        width: 46, 
        height: 46,
        backgroundColor: colors.lightBlue,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: colors.text,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
    },
})

export default getStyles;