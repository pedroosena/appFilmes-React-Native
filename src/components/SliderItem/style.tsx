import { StyleSheet } from "react-native";

const getStyles = (colors) =>  StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingBottom: 10,
        paddingRight: 16,
        width: 140, 
    },
    bannerItem :{
        width: '100%',
        height: 170,
        borderRadius: 5,
    },
    title: {
        color: colors.text,
        fontSize: 14,
        paddingTop: 8,
    },
    rateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rate: {
        paddingLeft: 4,
        color: colors.text,
        fontSize: 12,
    },
})

export default getStyles;