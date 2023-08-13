import React, { useEffect } from 'react';
import { Card } from 'flowbite-react';
import { Spinner } from 'flowbite-react';
import { useNavigate, useParams } from 'react-router-dom';
import { selectedMovie, removeSelectedMovie } from '../redux/action/movies';
import { api, api_key } from '../api';
import { useDispatch, useSelector } from 'react-redux';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const movieDetail = async () => {
    const res = await api.get(`/movie/${id}?api_key=${api_key}`);
    dispatch(selectedMovie(res.data));
  };

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      movieDetail();
    }
      return () => dispatch(removeSelectedMovie({}))
    
  }, []);

  let movie = useSelector((state) => state.movies.movie);
  console.log(movie);
  return (
    <div className="container mx-auto">
      <span className="p-10" onClick={() => navigator('/')}>
        Back
      </span>
      {
        JSON.stringify(movie) == {} ? (  <Spinner
          aria-label="Extra large spinner example"
          size="xl"
        />)
          : (
            <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{movie.title}</p>
            </h5>
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <p>{movie.overview}</p>
            </div>
            <div className="flex flex-row">
              <i className="fa-solid fa-star p-6 bg-emerald-200 mx-2 rounded-full">
                {movie.vote_average}
              </i>
              <i className="fa-regular fa-calendar-days p-6 rounded-full bg-fuchsia-400 ">
                {movie.release_date}
              </i>
              <i className="fa-solid fa-people-group p-6 rounded-full bg-fuchsia-400 ">
                {movie.vote_count}
              </i>
    
              <i className="fa-solid fa-people-group p-6 rounded-full bg-fuchsia-400 ">
                {movie.status}
              </i>
            </div>
          </Card>
          )
          
}
    </div>
  );
};

export default Detail;
