import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const APIUrl = 'https://movies-w2a8.onrender.com/movie/';

const initialState = {
  movies: [],
  isLoading: false,
  hasError: false,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (thunkAPI) => {
  try {
    const response = await axios(APIUrl);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

const MoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => ({ ...state, isLoading: true }));
    builder.addCase(fetchMovies.fulfilled,
      (state, action) => {
        const allMovies = action.payload;
        const movieTypes = [...new Set(allMovies.map((movie) => movie.movie_type))];
        const finalMovies = movieTypes.map((movieType) => ({
          movie_type: movieType,
          movies: allMovies.filter((movie) => movie.movie_type === movieType),
        }));
        return { ...state, movies: finalMovies, isLoading: false };
      });
    builder.addCase(fetchMovies.rejected,
      (state) => ({ ...state, hasError: true, isLoading: false }));
  },
});

export default MoviesSlice.reducer;
