import React from "react";
import { useContext } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../../contexts/ThemeContext";


import getstyles from "./style";


//

export default function Header({title}) {

    const navigation = useNavigation();
    
    const {colors} = useContext(ThemeContext)
    const styles = getstyles(colors)

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.menuButton} onPress={ () => navigation.openDrawer() }>
                <Feather name="menu" size={36} color={colors.text} />
            </TouchableOpacity>

            <Text style={styles.title}>{title}</Text>
        </View>

    )

}