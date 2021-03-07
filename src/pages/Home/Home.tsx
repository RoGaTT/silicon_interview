import React, { FC } from 'react';

import classes from './Home.module.scss';

type PropsType = {

}

const Home: FC<PropsType> = () => {
  console.log('adas');
  return (
    <div className={classes.root}>
      dasda
    </div>
  );
};

export default Home;
