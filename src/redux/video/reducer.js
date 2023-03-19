import { createSlice } from '@reduxjs/toolkit';

const progressSlice = createSlice({
  name: 'progress',
  initialState: {},
  reducers: {
    setProgress: (state, action) => {
      const { id, progress } = action.payload;
      state.id = id;
      state.progress = progress;
    },
  },
});

export const { setProgress } = progressSlice.actions;
export default progressSlice.reducer;