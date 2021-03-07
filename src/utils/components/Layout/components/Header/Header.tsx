import React, { FC } from 'react';

type PropsType = {
    children: React.ReactNode
}

const Header: FC<PropsType> = ({ children }) => (
  <div>
    {children}
  </div>
);

export default Header;
