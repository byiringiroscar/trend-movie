import './Main.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/movie/MovieSlice';
import CardContainer from './CardContainer';

const Main = () => {
  const { movies, isLoading } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  });

  if (isLoading) {
    return (
      <main>
        <h1 className="main-title">Loading...</h1>
      </main>
    );
  }

  return (
    <main>
      <h2 className="main-title">Movies</h2>
      <p className="main-description">
        Movies move us like nothing else can, whether they’re scary,
        funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.
      </p>
      <div className="main-card-container">
        {movies.map((item) => (<CardContainer key={item.movie_type} />))}
      </div>
    </main>
  );
};

export default Main;
