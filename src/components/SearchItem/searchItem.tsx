import {View, Text, TouchableOpacity, Image} from 'react-native'
import getStyles from './style'

import { Ionicons } from '@expo/vector-icons'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'


export default function SearchItem({ data, navigatePage }) {

    const { colors } = useContext(ThemeContext);
    const styles = getStyles(colors);

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={() => navigatePage(data)}>
            <Image style={styles.poster} source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}/>

            <View style={styles.informations}>
                <Text style={styles.title} numberOfLines={2}>{data.title}</Text>

                <View style={styles.rateContainer}>
                    <Ionicons name='star' size={20} color='#E7A74e' />
                    <Text style={styles.rate}>{data?.vote_average}/10</Text>
                </View>

                <Text style={styles.description} numberOfLines={6}>{data.overview}</Text>

            </View>
            
        </TouchableOpacity>
    )
}