import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./action";

const store = configureStore({
  reducer: {
    songs: songsReducer, //combineReducers
    movies: moviesReducer, //combineReducers
  },
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };
