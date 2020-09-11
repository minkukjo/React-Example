import React from "react";

interface Movie {
    image: String,
    subtitle: String,
    title: String,
    userRating: String
}

const Movie:React.FC<Movie> = ( {title, subtitle, image, userRating} ) => {
    return <div>
        {title}
        {subtitle}
        {image}
        {userRating}
    </div>

}

export default Movie;