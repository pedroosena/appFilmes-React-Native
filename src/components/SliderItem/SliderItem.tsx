import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import getStyles from "./style";
import { ThemeContext } from "../../contexts/ThemeContext";


export default function SliderItem({data, navigatePage}) {

    const { colors } = useContext(ThemeContext)

    const styles = getStyles(colors);

    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={() => navigatePage(data)}>
            <Image  style={styles.bannerItem}  resizeMethod="resize" source={{uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`}} />
            <Text style={styles.title} numberOfLines={1}>{data.title}</Text>
            <View style={styles.rateContainer}>
                <Ionicons name="star" size={12} color="#E7A74e"/>
                <Text style={styles.rate}>{data.vote_average.toFixed(1)}/10</Text>
            </View>
        </TouchableOpacity>

    )

}