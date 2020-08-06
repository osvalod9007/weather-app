import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment';

const HourlyItem = ({ hourly: { dt, main, weather, wind, visibility } }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Card className={classes.root} variant='outlined'>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='h2'
              style={{ textAlign: 'center' }}
            >
              hour {moment(Number(dt) * 1000).format('h:mm')}
            </Typography>
          </CardContent>
          <CardMedia
            component='img'
            alt='Contemplative Reptile'
            height='140'
            image={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            title={weather[0].description}
          />
          <CardContent>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              style={{ textAlign: 'center' }}
            >
              Temp: {Math.round(main.temp_min)}
              <sup>&deg;C</sup>
              {'  '}
              {Math.round(main.temp_max)}
              <sup>&deg;C</sup>
              <br />
              Temp feel: {Math.round(main.feels_like)}
              <sup>&deg;C</sup>
              <br />
              Humidity: {main.humidity}%
              <br />
              Visibility: {visibility}m
              <br />
              Wind: {wind.speed}m/s
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fragment>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    marginTop: '10px',
    width: '100px',
    height: '100px',
  },
});

export default HourlyItem;
