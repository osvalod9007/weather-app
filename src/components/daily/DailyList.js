import React, { useContext, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import DailyItem from './DailyItem';
import WeatherContext from '../../context/weather/weatherContext';
import Spinner from '../layout/Spinner';

const DailyList = () => {
  const classes = useStyles();
  const weatherContext = useContext(WeatherContext);
  const { loading, dailys, city } = weatherContext;

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className={classes.root}>
        <h1>{city}</h1>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {dailys.map(
            (daily, index) =>
              index < 5 && (
                <Grid key={index} item xs={2}>
                  <DailyItem daily={daily} />
                </Grid>
              )
          )}
        </Grid>
      </div>
    </Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20px',
  },
}));

export default DailyList;
