import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import getStyles from './style';

import api, { key } from '../../services/api';

import SearchItem from '../../components/SearchItem/searchItem';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Search() {

    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    const { colors } = useContext(ThemeContext)
    const styles = getStyles(colors);

    useEffect(() => {
        let isActive = true

        async function getSearchMovie() {
            const response = await api.get('/search/movie', {
                params: {
                    api_key: key,
                    query: route?.params?.name,
                    language: 'pt-BR',
                    page: 1,
                }
            })

            if (isActive) {
                setMovie(response.data.results)
                setLoading(false);
                console.log("cheguei aqq")
                console.log(response.data.results)
            }

        }

        if (isActive) {
            getSearchMovie();
        }

        return () => {
            isActive = false;
        }

    }, [])

    function navigateDetailsPage(item) {
        navigation.navigate('Detail', {id: item.id} )
    }

    if (loading) {
        return (
            <View style={[styles.container, {justifyContent: 'center'}]}>
                <ActivityIndicator size='large' color='#fff' />
            </View>
        )
    }
    
    

    return(
        <View style={styles.container}>

                <View style={styles.header}>

                    <TouchableOpacity style={styles.headerButton} activeOpacity={0.8} onPress={() => navigation.goBack()}> 
                        <Feather
                            name='arrow-left'
                            size={28}
                            color='#fff'
                        />
                    </TouchableOpacity>

                    <Text style={styles.headerText}>Sua busca</Text>
                </View>

            {movie.length === 0 ? 

                <View style={{alignItems: 'center', paddingTop: 80}}>
                 <Text style={{color: colors.text}}>Nenhum filme encontrado :(</Text>
                </View>

            :
            <>
                

                <FlatList 
                    data={movie}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => <SearchItem data={item} navigatePage={() => navigateDetailsPage(item)}/>}
                />
            </>
            }

        </View>

    )
}