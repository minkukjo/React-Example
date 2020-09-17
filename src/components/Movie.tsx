import React from 'react';

interface Movie {
  image: string;
  subtitle: string;
  title: string;
  userRating: string;
}

const Movie: React.FC<Movie> = ({ title, subtitle, image, userRating }) => {
  return (
    <div className="movie">
      <img src={image}></img>
      <div className="movie__data">
        <h3 className="movie__title">
          {title.replace('<b>', '').replace('</b>', '')}
        </h3>
        <h5 className="movie__subtitle">{subtitle}</h5>
        <p className="moive__userRating">{userRating}</p>
      </div>
    </div>
  );
};

export default Movie;
