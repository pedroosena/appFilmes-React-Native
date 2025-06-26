import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

import { Feather } from '@expo/vector-icons'

import styles from "./style";

export default function ModalLink({link, title, closeModal}){
    return (
        <>
            <TouchableOpacity style={styles.backButton} onPress={closeModal}>
                <Feather name="x" size={35} color="#fff"/>
                <Text style={styles.name} numberOfLines={1}>{title}</Text>

            </TouchableOpacity>

            <WebView
                source={{uri: link}}
            />

        </>
    )

}