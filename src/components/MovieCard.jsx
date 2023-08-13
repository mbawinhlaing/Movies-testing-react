import React from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
const MovieCard = ({ movie }) => {
  return (
    <div>
      {/* Loop HERE */}
      <Link to={`/movies/detail/${movie.id}`}>
        <div className="max-w-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{movie.title}</p>
            </h5>
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <p>{movie.overview.slice(0, 70)}</p>
            </div>
            <div className="flex flex-row">
              <i className="fa-solid fa-star p-6 bg-emerald-200 mx-2 rounded-full">
                {movie.vote_average}
              </i>
              <i className="fa-regular fa-calendar-days p-6 rounded-full bg-fuchsia-400 ">
                {' '}
                {movie.release_date}
              </i>
            </div>
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
