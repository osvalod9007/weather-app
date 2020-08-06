import React, { Fragment } from 'react';
import DailyList from '../daily/DailyList';
import Search from '../daily/Search';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <DailyList />
    </Fragment>
  );
};

export default Home;
