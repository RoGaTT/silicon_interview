import React, { FC } from 'react';

type PropsType = {
    children: React.ReactNode
}

const Layout: FC<PropsType> = ({ children }) => {
  console.log('adsada');
  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
