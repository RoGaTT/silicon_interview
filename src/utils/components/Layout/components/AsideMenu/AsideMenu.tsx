import React, { FC } from 'react';

type PropsType = {
    children: React.ReactNode
}

const AsideMenu: FC<PropsType> = ({ children }) => (
  <div>
    {children}
  </div>
);

export default AsideMenu;
