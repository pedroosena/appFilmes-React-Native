import { ThemeContext } from '@react-navigation/native';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';



const getstyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    title: {
        color: colors.text,
        fontSize: 20,
        padding: 14,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 14,
        alignItems: 'center',
        backgroundColor: colors.lightBlue,
        padding: 14,
        marginHorizontal: 20,
        borderRadius: 5,
        height: 60,
    },
})

export default getstyles;