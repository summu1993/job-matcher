import React, { FC } from 'react';
import HeaderNav from '../../components/HeaderNav';

type ComponentProps = React.PropsWithChildren<{}>;
const Layout: FC<ComponentProps> = ({ children }) => (
  <>
    <HeaderNav />
    {children}
  </>
);

export default Layout;
