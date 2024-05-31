import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  users: [{
    id: 121212,
    firstname: 'dummyUser',
    lastname: 'lastname',
    email: 'dummyuser@gmail.com',
    number: '7856548512',
    password: 'Asdf@123'
  }],
  currentUser: null,

  dialogState: {
    UpdateUserDialog: false,
  },
  searchMovieInput: '',
  movie: [],
  movieDetails: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    handleUpdateUser: (state, action) => {
      const { firstname, lastname } = action.payload;
      state.currentUser.firstname = firstname;
      state.currentUser.lastname = lastname;
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
      toast.success('Profile Updated Successfully!')

    },
    handleUpdateUserDialog: (state, action) => {
      state.dialogState.UpdateUserDialog = action.payload;
    },
    handleSearch: (state, action) => {
      state.searchMovieInput = action.payload;
    },
    getSearchMovie: (state, action) => {
      state.movie = action.payload;
    },
    handleMovieDeatails: (state, action) => {
      state.movieDetails = action.payload;
    }
  },
});

export const { register, login, logout, handleUpdateUser, UpdateUserDialog, handleUpdateUserDialog, handleSearch, getSearchMovie, handleMovieDeatails } = userSlice.actions;
export default userSlice.reducer;