import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, ActivityIndicator, StatusBar } from "react-native"

import getStyles from "./style";

import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from "@react-navigation/native";

import api, { key } from "../../services/api";
import { FlatList } from "react-native-gesture-handler";
import { saveMovie, hasMovie, deleteMovie } from '../../utils/storage'

import Stars from 'react-native-stars';
import Genres from "../../components/Genres/genres";
import ModalLink from "../../components/ModalLink/modalLink";
import { ThemeContext } from "../../contexts/ThemeContext";


export default function Detail() {

    const navigation = useNavigation();
    const route = useRoute();

    const [loading, setLoading] = useState(true)

    const [movie, setMovie] = useState({});
    const [openLink, setOpenLink] = useState(false);
    const [openPoster, setOpenPoster] = useState(false);
    const [favoritedMovie, setFavoritedMovie] = useState(false)

    const {colors} = useContext(ThemeContext)
    const styles = getStyles(colors);

    useEffect(() => {
        let isActive = true; 

        async function getMovie(){
            const response = await api.get(`/movie/${route.params?.id}`, {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                }
                
            })
            .catch((err) => {
                console.log(err)
            })

            if (isActive) {
                setMovie(response.data);
                
                const isFavorite = await hasMovie(response.data)
                setFavoritedMovie(isFavorite)

                setLoading(false)
            }
        }

        if (isActive) {
            getMovie();
        }
        
        return () => {
            isActive = false;
        }

    }, [])

    async function handleFavoriteMovie(movie) {

        if (favoritedMovie) {
            await deleteMovie(movie.id)
            setFavoritedMovie(false)
        }
        else {
            await saveMovie('@appfilmes', movie)
            setFavoritedMovie(true)
        }

        
    }

    if (loading) {
        return (
            <View style={[styles.container, {justifyContent: 'center'}]}>
                <ActivityIndicator size='large' color={colors.text}/>
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

                <TouchableOpacity style={styles.headerButton} activeOpacity={0.8} onPress={() => handleFavoriteMovie(movie)}> 
                    <Ionicons
                        name={favoritedMovie ? 'bookmark' : 'bookmark-outline'}
                        size={28}
                        color='#fff'
                    />
                </TouchableOpacity>
                
            </View>

            <Image source={{uri: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}} style={styles.banner}/>

            <TouchableOpacity style={styles.posterButton} onPress={ () => setOpenPoster(true) } activeOpacity={0.8}>
                <Image source={{uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`}} style={styles.poster}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkButton} onPress={() => setOpenLink(true)} activeOpacity={0.8}>
                <Feather name="link" size={24} color="#fff"/>
            </TouchableOpacity>

            <Text style={styles.title} numberOfLines={2}>{movie.title}</Text>

            <View style={styles.contentArea}>
                <Stars
                    default={movie.vote_average}
                    count={10}
                    half={true}
                    starSize={28}
                    fullStar={ <Ionicons name="star" size={24} color='#E7A74e' /> }
                    emptyStar={ <Ionicons name="star-outline" size={24} color='#E7A74e' />}
                    halfStar={ <Ionicons name="star-half" size={24} color='#E7A74e' />}
                    disable={true}
                />
                <Text style={styles.rate}>{movie.vote_average >= 0 ? movie.vote_average.toFixed(1) : movie.vote_average}/10</Text>
            </View>

            <FlatList 
                style={{paddingLeft: 14, marginTop: 8, maxHeight: 35, minHeight: 35, marginBottom: 10}}
                data={movie?.genres}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={ (item) => String(item.id) }
                renderItem={({item}) => <Genres data={item}/> }
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={[styles.title, {paddingLeft: 10}]}> Descrição</Text>
                <Text style={styles.description}>{movie.overview}</Text>
            </ScrollView>

            <Modal animationType="slide" transparent={true} visible={openLink}>
                <ModalLink
                    link={movie?.homepage}
                    title={movie?.title}
                    closeModal={() => setOpenLink(false)}
                />

            </Modal>

            <Modal transparent={true} visible={openPoster} onRequestClose={() => setOpenPoster(false)}>
                <TouchableOpacity style={styles.fullPosterContainer} 
                                  activeOpacity={0.98} onPress={() => setOpenPoster(false)}> 
                    <Image source={{uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`}} style={styles.fullPosterImage} />
                </TouchableOpacity>
                
            </Modal>

        </View>
    )
}