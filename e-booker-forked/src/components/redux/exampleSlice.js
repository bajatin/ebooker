import { createSlice } from "@reduxjs/toolkit";

const example = createSlice({
  name: "example2",
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => ({ ...state, count: state.count + 1 }),
    test: (state, action) => {
      const { testValue } = action.payload;
      console.log(testValue);
    }
  }
});

export const { increment, decrement, test } = example.actions;

export default example.reducer;
