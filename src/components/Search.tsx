import React, {useState} from 'react'
import axios from "axios"
import MovieComponent from "./Movie"

interface Movie {
    actor: String,
    director: String,
    image: String,
    link: String,
    pubDate: String,
    subtitle: String,
    title: String,
    userRating: String
}

interface MovieInformation {
    display: Number,
    items: [],
    start: Number,
    total: Number
}

function Search() {
    const [input, setInput] = useState("")
    const [movies, setMovies] = useState<Movie[]>([])
    const headers = {
        "X-Naver-Client-Id" : "5ZyDQltFjVoeS9twS18K",
        "X-Naver-Client-Secret" : "g0jJ0a7tNA",
        "Access-Control-Allow-Origin": "*"
    }
    const params = {
        "query" : input
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }

    const getMovies = async() => {
        await axios.get<MovieInformation>("/v1/search/movie.json", {params:params, headers:headers}).then(
            (response) => {
                const items = response.data.items as Movie[]
                setMovies(items)
            }
        )
    }

    return <div><form>
        <input 
            placeholder="영화 제목을 입력해주세요."
            value={input}
            onChange={handleChange}>
        </input>
    </form>
    <button onClick={getMovies}>검색</button>
    {movies.map( (movie, index) => {
        return <MovieComponent key={index} title={movie.title} image={movie.image} subtitle= {movie.subtitle} userRating={movie.userRating} ></MovieComponent>
    })}
    </div>
}

export default Search;