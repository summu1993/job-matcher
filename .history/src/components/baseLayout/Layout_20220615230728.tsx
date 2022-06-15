import React, { FC } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

type ComponentProps = React.PropsWithChildren<{}>;
const Layout: FC<ComponentProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
