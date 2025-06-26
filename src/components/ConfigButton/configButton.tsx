import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";


import getstyles from './style';

type ConfigButtonProps = {
    title: string;
    icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    onPress: () => void;
    isActive: boolean;
}

export default function ConfigButton({ title, icon, onPress, isActive } : ConfigButtonProps) {

    const { currentTheme, toggleTheme, colors } = useContext(ThemeContext)

    const styles = getstyles(colors);

    return(
        <TouchableOpacity style={styles.configButton} onPress={onPress}>
            <View style={styles.titleWrapper}>
                <MaterialCommunityIcons name={icon} size={20} color='#fff' />
                <Text style={styles.title}>{title}</Text>
            </View>
            
            <MaterialCommunityIcons name={isActive ? 'check-circle' : 'checkbox-blank-circle-outline'} size={20} 
                    color='#fff'/>
        </TouchableOpacity>
    )
}