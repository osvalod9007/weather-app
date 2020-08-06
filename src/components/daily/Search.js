import React, { useState, useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import WeatherContext from '../../context/weather/weatherContext';

const Search = () => {
  const classes = useStyles();
  const weatherContext = useContext(WeatherContext);

  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    weatherContext.searchCity(text);
    setText('');
  };
  return (
    <form
      className={classes.root}
      onSubmit={onSubmit}
      noValidate
      autoComplete='off'
    >
      <div className={classes.searchContainer}>
        <InputBase
          className={classes.input}
          placeholder='Search City'
          onChange={onChange}
          value={text}
        />
        <IconButton
          type='submit'
          className={classes.iconButton}
          aria-label='search'
        >
          <SearchIcon />
        </IconButton>
      </div>
    </form>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  searchContainer: {
    display: 'flex',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '5px',
    marginBottom: '5px',
    margin: '200px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default Search;
