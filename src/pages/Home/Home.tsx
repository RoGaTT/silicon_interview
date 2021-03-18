import React, { FC } from 'react';

import classes from './Home.module.scss';

type PropsType = {

}

const Home: FC<PropsType> = () => {
  console.log('adas');
  return (
    <div className={classes.root}>
      Look at right bottom corner!!!
    </div>
  );
};

export default Home;
