import { configureStore, combineReducers } from "@reduxjs/toolkit";
import exampleSlice from "./exampleSlice";
import querySlice from "./searchForm";

const reducer = combineReducers({
  counter1: exampleSlice,
  query: querySlice
});

const store = configureStore({
  reducer: reducer
});

export default store;
