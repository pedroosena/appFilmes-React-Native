import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, Text, View, TextInput, ScrollView, Image, FlatList, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from "@expo/vector-icons"
import getStyles from './style';

import Header from '../../components/Header/Header';
import SliderItem from '../../components/SliderItem/SliderItem';
import { ThemeContext } from '../../contexts/ThemeContext';


import api, { key } from '../../services/api';
import { getListMovies, randomBanner } from '../../utils/movie';



export default function Home() {
  
    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [bannerMovie, setBannerMovie] = useState({});
    const [input, setInput] = useState('');

    const [loading, setLoading] = useState(true)

    const { colors } = useContext(ThemeContext)
    const styles = getStyles(colors)

    const navigation = useNavigation();

    useEffect(() => {

        let isActive = true;
        const ac = new AbortController();

        async function getMovies() {

            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing', {
                    params:{
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                }),
                
                api.get('/movie/popular', {
                    params:{
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                }),

                api.get('/movie/top_rated', {
                    params:{
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                }),

                
            ])

            if (isActive) {
                const nowList = getListMovies(8, nowData.data.results)
                const popularList = getListMovies(20, popularData.data.results)
                const topList = getListMovies(10, topData.data.results)

                setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)])

                setNowMovies(nowList);
                setPopularMovies(popularList);
                setTopMovies(topList)

                setLoading(false);
            }
            

        }

        getMovies();

        return () => {
            isActive = false;
            ac.abort();
        }

    }, [])

    function navigateDetailPage(item){
        navigation.navigate('Detail', {id: item.id} )
    }

    function handleSearchMovie() {
        if (input === '') return;

        navigation.navigate('Search', {name: input});
        setInput('');
    }

    if (loading){
        return (
            <View style={[styles.container, {justifyContent: 'center'}]}>
                <ActivityIndicator size='large' color={colors.text} />
            </View>
        )
    }
  
    return (
    <View style={styles.container}>
        <Header title="App Filmes"/>

        <View style={styles.searchContainer}>
            <TextInput style={styles.input} 
            placeholder='Digite o nome do filme'
            value={input}
            onChangeText={setInput}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearchMovie}>
                <Feather name='search' size={30} color={colors.text}/>
            </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Em cartaz</Text>      

            <TouchableOpacity activeOpacity={0.8} onPress={() => navigateDetailPage(bannerMovie)}>
                <Image  style={styles.banner}  resizeMethod="resize" source={{uri: `https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path}`}} />
            </TouchableOpacity>

            <FlatList 
            style={styles.sliderMovie}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={nowMovies}
            renderItem = {({item}) => <SliderItem data={item} navigatePage={ () => navigateDetailPage(item) }/> }
            keyExtractor={(item) => String(item.id)}

            />

            <Text style={styles.title}>Populares</Text>   

            <FlatList 
            style={styles.sliderMovie}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={popularMovies}
            renderItem = {({item}) => <SliderItem data={item} navigatePage={ () => navigateDetailPage(item) }/> }
            keyExtractor={(item) => String(item.id)}

            />

            <Text style={styles.title}>Mais votados</Text>   

            <FlatList 
            style={styles.sliderMovie}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={topMovies}
            renderItem = {({item}) => <SliderItem data={item} navigatePage={ () => navigateDetailPage(item) }/> }
            keyExtractor={(item) => String(item.id)}
            />

        </ScrollView>
        
    </View>
  );
}