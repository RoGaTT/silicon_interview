import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './Home';

const HomePage: FC = () => (
  <>
    <Helmet title="Home page" />
    <Home />
  </>
);

export default HomePage;
