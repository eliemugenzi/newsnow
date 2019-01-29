import {
  FETCH_APPLE,
  FETCH_BUSINESS,
  FETCH_TECH,
  FETCH_WSJ,
  NEWS_LOADING,
  FETCH_FAILED
} from "../actions/types";

const initialState = {
  business: [],
  tech: [],
  wsj: [],
  apple: [],
  loading: false,
  businessLoaded: false,
  techLoaded: false,
  wsjLoaded: false,
  appleLoaded: false,
  loadFailed: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPLE:
      return {
        ...state,
        loading: false,
        apple: action.payload,
        appleLoaded: action.loaded
      };
    case FETCH_BUSINESS:
      return {
        ...state,
        loading: false,
        business: action.payload,
        businessLoaded: action.loaded
      };
    case FETCH_TECH:
      return {
        ...state,
        loading: false,
        tech: action.payload,
        techLoaded: action.loaded
      };
    case FETCH_WSJ:
      return {
        ...state,
        loading: false,
        wsj: action.payload,
        wsjLoaded: action.loaded
      };
    case NEWS_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_FAILED:
      return {
        ...state,
        loadFailed: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
