import React, { FC } from 'react';
import Header from '../../components/Header';

type ComponentProps = React.PropsWithChildren<{}>;
const Layout: FC<ComponentProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
