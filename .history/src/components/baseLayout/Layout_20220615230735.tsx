import React, { FC } from 'react';
import Header from '../../components/HeaderNav';

type ComponentProps = React.PropsWithChildren<{}>;
const Layout: FC<ComponentProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
