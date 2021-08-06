import { createSlice } from "@reduxjs/toolkit";

const searchForm = createSlice({
  name: "example",
  initialState: {
    cards: [],
    loading: false,
    query: ""
  },
  reducers: {
    setCards: (state, action) => ({ ...state, cards: action.payload.cards }),
    toggleLoading: (state, action) => ({ ...state, loading: !state.loading }),
    setQuery: (state, action) => ({ ...state, query: action.payload.query })
  }
});

export const { setCards, toggleLoading, setQuery } = searchForm.actions;

export default searchForm.reducer;
