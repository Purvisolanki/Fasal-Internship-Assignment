import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviePlaylistReducer from './PlaylistSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    moviePlaylist: moviePlaylistReducer
  },
});

export default store;
