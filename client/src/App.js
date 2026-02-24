import { useEffect, useState } from "react";

import "./App.css"

function App() {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState("popular")

    useEffect(() => {
        fetch(`/api/movies?category=${category}`)
          .then(res => res.json())
          .then(data => setMovies(data))
          .catch(err => console.error(err))
    }, [category]);

    return (
        <div className="App">
            <button onClick={()=> setCategory("now_playing")} className="filterButton">Now Playing</button>
            <button onClick={() => setCategory("popular")} className="filterButton">Popular</button>
            {Array.isArray(movies) && movies.map(movie => (
              <div key={movie.id}>
                <p>{movie.title}</p>
                <img 
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  width="200" 
                  alt={movie.title} />
              </div>
            ))}
        </div>
    );
}

export default App;