import Movie from "./Movie"
import NotFound from "./NotFound";

export default function Movies(props){
    const {movies = []} = props;
    return(
        <div className="movies">
            {movies.length ? movies.map(movie => (
                <Movie key={movie.imdbID} {...movie}/>
            )) : <NotFound/> }
        </div>
    )
}

// NotFound jsx va cssni orniga <h4>Nothing found deb yozselar ham bo'lasi.</h4> yoki internetdan birorta 404 not found templateni qo'yasizlar
