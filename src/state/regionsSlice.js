import { createSlice } from '@reduxjs/toolkit';

export const regionsSlice = createSlice({
  name: 'regions',
  initialState: {
    options: {
      server: 'all',
      hideNonShopTowns: true,
    },
    loading: false,
    error: false,
    errorMessage: '',
    results: [],
    page: 1,
  },
});
