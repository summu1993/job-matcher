import React, { FC } from "react";
import HeaderNav from "../../components/HeaderNav";

type ComponentProps = React.PropsWithChildren<{}>;
const Layout: FC<ComponentProps> = ({ children }) => (
  <React.Fragment>
    <HeaderNav />
    {children}
  </React.Fragment>
);

export default Layout;
