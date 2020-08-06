import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import WeatherState from './context/weather/weatherState';
import DailyDetail from './components/daily/DailyDetail';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <WeatherState>
      <Router>
        <Fragment>
          <Navbar />
          <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/detail/:day' component={DailyDetail} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    </WeatherState>
  );
};

export default App;
