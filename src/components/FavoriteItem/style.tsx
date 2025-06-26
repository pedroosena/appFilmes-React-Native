import { StyleSheet } from "react-native";

const getStyles = (colors) =>  StyleSheet.create({
    container: {
        padding: 14,
        width: '100%'
    },
    title: {
        color: colors.text,
        fontSize: 18,
        paddingTop: 8,
        fontWeight: 'bold'
    },
    rateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    rate: {
        paddingLeft: 4,
        color: colors.text,
        fontSize: 12,
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailButton: {
        width: '85%',
        height: 30,
        backgroundColor: colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    deleteButton: {
        width: '15%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default getStyles;