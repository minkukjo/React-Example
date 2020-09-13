import React, { useState } from 'react';
import axios from 'axios';
import MovieComponent from './Movie';

interface Movie {
  actor: string;
  director: string;
  image: string;
  link: string;
  pubDate: string;
  subtitle: string;
  title: string;
  userRating: string;
}

interface MovieInformation {
  display: Number;
  items: [];
  start: Number;
  total: Number;
}

function Search() {
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const headers = {
    'X-Naver-Client-Id': '5ZyDQltFjVoeS9twS18K',
    'X-Naver-Client-Secret': 'g0jJ0a7tNA',
    'Access-Control-Allow-Origin': '*',
  };
  const params = {
    query: input,
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const getMovies = async () => {
    await axios
      .get<MovieInformation>('/v1/search/movie.json', {
        params: params,
        headers: headers,
      })
      .then((response) => {
        const items = response.data.items as Movie[];
        setMovies(items);
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <form>
        <input
          placeholder="영화 제목을 입력해주세요."
          value={input}
          onChange={handleChange}
        ></input>
      </form>
      <button onClick={getMovies}>검색</button>
      <div className="movies">
        {movies.map((movie, index) => {
          return (
            <MovieComponent
              key={index}
              title={movie.title}
              image={movie.image}
              subtitle={movie.subtitle}
              userRating={movie.userRating}
            ></MovieComponent>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
