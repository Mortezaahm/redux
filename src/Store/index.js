import { configureStore, createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      // STATE IS NOT THE BIG STATE OBJECT
      // IN THE STORE
      // IT IS THE PIECE OF STATE MANAGED BY THIS SLICE
      // BY THIS REDUCER
      state.push(action.payload);
    },
    // "song" + "/" + "removeSong" = "song/removeSong"
    removeSong(state, action) {
      // action.payload === string, the song we want to remove
      //return state.filter((song) => song !== action.payload);
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
