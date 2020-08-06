import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

const DailyItem = ({ daily: { dt, temp, weather } }) => {
  const classes = useStyles();
  const day = moment(Number(dt) * 1000).format('dddd');
  const date = moment(Number(dt) * 1000).format('DD/MM/YYYY');

  return (
    <Fragment>
      <Card className={classes.root} variant='outlined'>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {day}
              <br />
              {date}
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
              {Math.round(temp.min)}
              <sup>&deg;C</sup>
              {'  '}
              {Math.round(temp.max)}
              <sup>&deg;C</sup>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            <Link to={`/detail/${day}`}>Learn More</Link>
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    marginTop: '10px',
    width: '100px',
    height: '100px',
  },
});

export default DailyItem;
