import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'


import getStyles from "./style";
import { ThemeContext } from "../../contexts/ThemeContext";


export default function FavoriteItem({ data, deleteMovie, navigatePage }) {

    const { colors } = useContext(ThemeContext);
    const styles = getStyles(colors)

    return(
        <View style={styles.container}>
            <Text style={styles.title} >{data.title}</Text>

            <View style={styles.rateContainer}>
                <Ionicons name="star" size={12} color="#E7A74e"/>
                <Text style={styles.rate}>{data.vote_average}/10</Text>
            </View>

            <View style={styles.actionContainer}>

                <TouchableOpacity style={styles.detailButton} onPress={ () => navigatePage(data) }>
                    <Text style={[styles.title, {fontSize: 13, color: '#fff'}]}>Ver detalhes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.deleteButton} onPress={ () => deleteMovie(data.id) }>
                    <Feather name="trash" size={24} color={colors.text}/>
                </TouchableOpacity>

            </View>

        </View>

    )

}