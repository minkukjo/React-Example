import React from "react";
import IMovie from "interface/Moive";

const Movie: React.FC<IMovie> = ({
  title,
  subtitle,
  image,
  userRating,
  pubDate,
  director,
  link,
}) => {
  return (
    <div className="movie">
      <img src={image}></img>
      <div className="movie__data">
        <h3 className="movie__title">
          {title.replace("<b>", "").replace("</b>", "")}
        </h3>
        <h5 className="movie__year__and__director">
          {pubDate} {director.replaceAll("|", "")}
        </h5>
        {/* <h5 className="movie__subtitle">{subtitle}</h5> */}
        <a href={link}>영화 바로가기</a>
        <p className="moive__userRating">{userRating}</p>
      </div>
    </div>
  );
};

export default Movie;
