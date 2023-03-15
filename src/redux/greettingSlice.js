import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreetting = createAsyncThunk('fetchGreetting', async () => {
  const response = await axios.get('http://127.0.0.1:3000');
  return response.data;
});

const greettingsSlice = createSlice({
  name: 'greetting',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchGreetting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGreetting.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchGreetting.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const greettingReducer = greettingsSlice.reducer;
