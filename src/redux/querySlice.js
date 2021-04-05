import { createSlice } from "@reduxjs/toolkit";

export const querySlice = createSlice({
  name: "query",
  initialState: {
    skip: 0,
  },
  reducers: {
    querySkipIncrement: (state, action) => {
      state.skip = action.payload;
    },
  },
});

export const { querySkipIncrement } = querySlice.actions;

export default querySlice.reducer;
