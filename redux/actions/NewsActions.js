import {
  FETCH_APPLE,
  FETCH_TECH,
  FETCH_BUSINESS,
  FETCH_WSJ,
  NEWS_LOADING,
  LOADING_FAILED
} from "./types";
import axios from "axios";

export const getAppleNews = () => dispatch => {
  dispatch(newsLoading());

  axios
    .get(
      "https://newsapi.org/v2/everything?q=apple&from=2018-10-25&to=2018-10-25&sortBy=popularity&apiKey=459fbe535ba6413bad668c6005ec5b5d"
    )
    .then(res => {
      dispatch({
        type: FETCH_APPLE,
        payload: res.data.articles,
        loaded: true
      });
    })
    .catch(err => {
      dispatch(loadingFailed());
    });
};

export const getBusinessNews = () => dispatch => {
  dispatch(newsLoading());

  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=459fbe535ba6413bad668c6005ec5b5d"
    )
    .then(res => {
      dispatch({
        type: FETCH_BUSINESS,
        payload: res.data.articles,
        loaded: true
      });
    })
    .catch(err => dispatch(loadingFailed()));
};
export const getWsjNews = () => dispatch => {
  dispatch(newsLoading());

  axios
    .get(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=459fbe535ba6413bad668c6005ec5b5d"
    )
    .then(res => {
      dispatch({
        type: FETCH_WSJ,
        payload: res.data.articles,
        loaded: true
      });
    })
    .catch(err => dispatch(loadingFailed()));
};
export const getTechNews = () => dispatch => {
  dispatch(newsLoading());

  axios
    .get(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=459fbe535ba6413bad668c6005ec5b5d"
    )
    .then(res => {
      dispatch({
        type: FETCH_TECH,
        payload: res.data.articles,
        loaded: true
      });
    })
    .catch(err => dispatch(loadingFailed()));
};

export const newsLoading = () => {
  return {
    type: NEWS_LOADING
  };
};

export const loadingFailed = () => {
  return {
    type: LOADING_FAILED,
    payload: true
  };
};
