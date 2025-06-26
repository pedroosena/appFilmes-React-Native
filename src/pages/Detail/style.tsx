import { StyleSheet } from 'react-native';

const getStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        zIndex: 99,
        position: 'absolute',
        width: '100%',
        top: 35,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 14
    },
    headerButton: {
        width: 46, 
        height: 46,
        backgroundColor: colors.lightBlue,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        width: '100%',
        height: 280,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    posterButton: {
        width: '35%',
        height: 200,
        position: 'absolute',
        top: 130,
        right: 10,
        borderWidth: 3,
    },
    poster: {
        width: '100%',
        height: '100%',
    },
    fullPosterContainer: {
        flex: 1, 
        justifyContent: 
        'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.42)'
    },
    fullPosterImage: {
        width: '90%',
        height: 500,
        borderWidth: 2,
    },
    linkButton: {
        backgroundColor: colors.red,
        width: 63,
        height: 63,
        borderRadius: 25,
        position: 'absolute',
        top: 250,
        left: 15,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
    },
    title: {
        color: colors.title,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 55,
        paddingHorizontal: 14,
    },
    contentArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        paddingRight: 20,
        marginTop: 10,
    },
    rate: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.text,
    }, 
    description: {
        paddingHorizontal: 14,
        lineHeight: 20,
        paddingBottom: 100, 
        color: colors.text,
        fontSize: 12,
    }
})

export default getStyles;