import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons'
import { useNavigation, useIsFocused } from '@react-navigation/native';

import Header from '../../components/Header/Header';
import FavoriteItem from '../../components/FavoriteItem/favoriteItem';

import { getMoviesSave, deleteMovie } from '../../utils/storage'

import getStyles from './style';
import { ThemeContext } from '../../contexts/ThemeContext';




export default function Movies() {

  const navigation = useNavigation()
  const isFocused = useIsFocused();

  const [movies, setMovies] = useState([]);

  const { colors } = useContext(ThemeContext);
  const styles = getStyles(colors);

  useEffect(() => {
    let isActive = true;

    async function getFavoriteMovies() {
      const result = await getMoviesSave('@appfilmes');
      
      setMovies(result)
    } 

    if (isActive) {
      getFavoriteMovies();
    }

    return () => {
      isActive = false 
    }

  }, [isFocused])

  async function handleDelete(id) {
    const result = await deleteMovie(id)
    setMovies(result)
  }
  
  function navigateDetailPage(item) {
    navigation.navigate('Detail', { id: item.id })
  }

  return (
     <View style={styles.container}>
            <Header title='Meus favoritos' />

            {movies.length === 0 ? 
              <View style={{alignItems: 'center', paddingTop: 80}}>
                <Text style={styles.text}>Você ainda não favoritou nenhum filme :(</Text>
              </View>
              :
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={movies}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                      <FavoriteItem 
                        data={item}
                        deleteMovie={ handleDelete }
                        navigatePage={ () => navigateDetailPage(item)}
                        />
                    )}
                />
            }

            

        </View>
  ); 
} 