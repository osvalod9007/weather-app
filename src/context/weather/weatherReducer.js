import { SEARCH_CITY, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CITY:
      return {
        ...state,
        dailys: action.payload.dailys,
        hourlys: action.payload.hourlys,
        city: action.payload.city,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
