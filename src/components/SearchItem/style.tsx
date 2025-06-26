import { StyleSheet } from "react-native";

const getStyles = (colors) => StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingBottom: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
    },
    poster :{
        width: '35%',
        height: 180,
        borderRadius: 5,
    },
    informations: {
        width: '65%',
        paddingHorizontal: 10,
    },
    title: {
        color: colors.text,
        fontWeight: 'bold',
        paddingTop: 8,
        fontSize: 16,
    },
    description: {
        color: colors.text,
        fontSize: 10,
        marginTop: 5,
    },
    rateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
    },
    rate: {
        paddingLeft: 4,
        color:  colors.text,
        fontSize: 12,
    }
})

export default getStyles;