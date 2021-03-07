import React, { FC } from 'react';

type PropsType = {
    children: React.ReactNode
}

const Footer: FC<PropsType> = ({ children }) => (
  <div>
    {children}
  </div>
);

export default Footer;
