import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getMoviesSave(key) {
    const myMovies = await AsyncStorage.getItem(key);

    let movieSave = JSON.parse(myMovies) || [];

    return movieSave;

}

export async function saveMovie(key, newMovie) {
    let moviesStored = await getMoviesSave(key);

    const hasMovie = moviesStored.some( item => item.id === newMovie.id);

    if (hasMovie) {
        return;
    }
    
    moviesStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored))

}

export async function deleteMovie(id) {
    let moviesStored = await getMoviesSave('@appfilmes');

    let myMovies = moviesStored.filter( item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@appfilmes', JSON.stringify(myMovies))

    return myMovies
}

export async function hasMovie(movie) {
    let moviesStored = await getMoviesSave('@appfilmes');

    const hasMovie = moviesStored.find( item => item.id === movie.id)

    if (hasMovie) {
        return true;
    } 

    return false;

}