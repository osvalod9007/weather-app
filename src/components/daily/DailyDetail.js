import React, { useContext, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import * as moment from 'moment';

import WeatherContext from '../../context/weather/weatherContext';
import HourlyItem from './HourlyItem';
import { Link } from 'react-router-dom';

const DailyDetail = ({ match }) => {
  const classes = useStyles();
  const weatherContext = useContext(WeatherContext);

  const { hourlys } = weatherContext;
  const hourly = hourlys.filter(
    (hourly) =>
      moment(Number(hourly.dt) * 1000).format('dddd') === match.params.day
  );
  console.log(hourly);
  return (
    <Fragment>
      <div className={classes.button}>
        <Button variant='outlined' color='primary'>
          <Link to='/'>Back</Link>
        </Button>
      </div>
      <div className={classes.root}>
        <Grid container spacing={4}>
          {hourly.map((hour, index) => (
            <Grid key={index} item xs={3}>
              <HourlyItem hourly={hour} />
            </Grid>
          ))}
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
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default DailyDetail;
