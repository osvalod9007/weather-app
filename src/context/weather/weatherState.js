import React, { useReducer } from 'react';
import axios from 'axios';

import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import { SEARCH_CITY, SET_LOADING } from '../types';

const apiKey = '925afb881d59dc25952b5f68039e8a44';
const url = 'https://api.openweathermap.org/data/2.5/';

// const apiKey = process.env.API_KEY;
// const url = process.env.URL;

const WeatherState = (props) => {
  const initialState = {
    dailys: [],
    hourlys: [],
    city: '',
    loading: false,
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const searchCity = async (text) => {
    try {
      setLoading();
      let res = await axios.get(`${url}weather`, {
        params: {
          q: text,
          units: 'metric',
          APPID: apiKey,
        },
      });

      const lat = res.data.coord.lat;
      const lon = res.data.coord.lon;

      const { data } = await axios.get(`${url}onecall`, {
        params: {
          lat,
          lon,
          units: 'metric',
          APPID: apiKey,
        },
      });

      res = await axios.get(`${url}forecast`, {
        params: {
          lat,
          lon,
          units: 'metric',
          APPID: apiKey,
        },
      });

      console.log(res.data);

      dispatch({
        type: SEARCH_CITY,
        payload: {
          dailys: data.daily,
          hourlys: res.data.list,
          city: res.data.city.name,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <WeatherContext.Provider
      value={{
        dailys: state.dailys,
        hourlys: state.hourlys,
        city: state.city,
        loading: state.loading,
        searchCity,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
