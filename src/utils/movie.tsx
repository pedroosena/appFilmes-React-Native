
//gera uma lista de filmes com o tamanho desejado 
export function getListMovies(size, movieList) {
    let movies = [];

    for(let i = 0; i < size; i++){
        movies.push(movieList[i])
    }

    return movies;

}

export function randomBanner (movies) {
    return Math.floor(Math.random() * movies.length);
}