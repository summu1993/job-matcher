import React, { useState, useContext, useEffect, FC } from 'react';
import { isTablet, isDesktop } from 'react-device-detect';


type ComponentProps = React.PropsWithChildren<{}>;

const HeaderNav: FC<ComponentProps> = ({ children }) => {

    return (
        <nav className="fixed top-0 left-0 z-10 flex h-16 w-full items-center justify-between bg-black px-4 md:h-24 md:px-16">

        </nav>
    )
}

export default HeaderNav;