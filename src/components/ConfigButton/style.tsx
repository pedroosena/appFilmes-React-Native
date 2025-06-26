import { StyleSheet } from "react-native";


const getstyles = (colors) => StyleSheet.create({
    configButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.lightBlue,
        borderRadius: 5, 
        marginBottom: 10,
        height: 60,
        marginHorizontal: 20,
        padding: 14,
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    title: {
        color: '#fff',
        fontSize: 14,
    },
})

export default getstyles;