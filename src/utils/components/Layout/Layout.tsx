import Widget from '@/ui/Widget';
import React, { FC } from 'react';
import classes from './Layout.module.scss';

type PropsType = {
    children: React.ReactNode
}

const Layout: FC<PropsType> = ({ children }) => {
  console.log('adsada');
  return (
    <div className={classes.root}>
      {children}
      <Widget />
    </div>
  );
};

export default Layout;
