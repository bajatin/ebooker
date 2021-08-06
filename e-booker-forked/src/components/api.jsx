import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setCards, toggleLoading } from "redux/searchForm";

function Api() {
  const { query } = useSelector((state) => state.query);
  const dispatch = useDispatch();
  dispatch(toggleLoading());
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&startIndex=0`
    )
    .then((res) => {
      if (res.data.items.length > 0) {
        dispatch(setCards({ cards: res.data.items }));
        dispatch(toggleLoading());
      }
    });
}

export default Api;
