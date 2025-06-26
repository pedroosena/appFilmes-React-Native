import { StyleSheet } from "react-native";
import { rgbaColor } from "react-native-reanimated/lib/typescript/Colors";

const getStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    searchContainer: {
        width: "100%",
        flexDirection: "row",
        height: 50, 
        alignItems: 'center',
        paddingHorizontal: 14,
        marginBottom: 8,
    },
    input: {
        backgroundColor: "#f6f6f6",
        width: "85%",
        height: 50,
        borderRadius: 50,
        paddingVertical: 8,
        paddingHorizontal: 15,
        fontSize: 15,
    },
    searchButton: {
        width: "15%",
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
    },
    title: {
        paddingTop: 20,
        paddingBottom: 8,
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        color: colors.text,
    },
    bannerButton: {

    },
    banner: {
        height: 180,
        borderRadius: 6,
        marginVertical: 0,
        marginHorizontal: 14,
    },
    sliderMovie: {
        paddingVertical: 0,
        paddingHorizontal: 14,
        height: 250,
    }
})

export default getStyles;