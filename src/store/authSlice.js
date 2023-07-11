import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuthenticated: false,
  user: null,
  status: 'idle',
  error: null,
};

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const response = await axios.post(process.env.REACT_APP_BACKEND_API_URL + '/api/login/', credentials);
  localStorage.setItem('token', response.data.access);
  return response.data;
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  const response = await axios.post(process.env.REACT_APP_BACKEND_API_URL + '/api/register/', userData);
  localStorage.setItem('token', response.data.access);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.status = 'idle';
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.status = 'idle';
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
