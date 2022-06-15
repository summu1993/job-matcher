import React, { useState, useContext, useEffect, FC } from "react";
import Link from "next/link";
import { isTablet, isDesktop } from "react-device-detect";

type ComponentProps = React.PropsWithChildren<{}>;

const HeaderNav: FC<ComponentProps> = ({ children }) => {
  return (
    <nav className="fixed top-0 left-0 z-10 flex h-16 w-full items-center justify-between bg-black px-4 md:h-24 md:px-16">
      <div className="h-6 w-auto md:h-11">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="inherit"
            height="inherit"
            viewBox="0 0 648.8 142.9"
          >
            <g>
              <g>
                <path
                  d="M191.1 19.1c0 2.2-.7 3.9-2 5.2-1.3 1.3-2.9 1.9-4.8 1.9s-3.5-.6-4.8-1.9c-1.3-1.3-2-3-2-5.2s.7-3.9 2-5.2 2.9-1.9 4.8-1.9 3.5.6 4.8 1.9c1.4 1.3 2 3 2 5.2z"
                  fill="#ff5280"
                ></path>
                <path
                  d="M392.6 18.6c0 3.2-1 5.8-3.1 7.6-2.1 1.9-4.5 2.8-7.3 2.8-2.9 0-5.4-.9-7.5-2.8-2.1-1.9-3.1-4.4-3.1-7.6 0-3.3 1-5.9 3.1-7.8s4.6-2.8 7.5-2.8c2.8 0 5.3.9 7.3 2.8s3.1 4.5 3.1 7.8z"
                  fill="#00d9aa"
                ></path>
                <g>
                  <path
                    fill="white"
                    d="M44.5 81.2c-2-1.6-4.3-3.1-6.9-4.2-2.6-1.2-5.3-2.3-8.1-3.4-2.7-1.1-5.2-2.2-7.3-3.1-2.1-.9-3.9-1.9-5.4-3-1.5-1.1-2.6-2.3-3.3-3.7-.8-1.4-1.1-3.1-1.1-5.1 0-2 .4-3.7 1.3-5 .9-1.4 2-2.5 3.4-3.4s3-1.6 4.9-2c1.8-.4 3.8-.6 5.9-.6 5.2 0 9.1.5 11.8 1.4 2.7.9 4.6 1.7 5.7 2.3l2.1-8.2c-1.3-.7-3.6-1.4-6.9-2.3s-7.4-1.3-12.4-1.3c-7.8 0-14 1.8-18.4 5.5-4.5 3.7-6.7 8.5-6.7 14.4 0 3.1.6 5.7 1.7 7.9s2.6 4 4.5 5.6c1.9 1.6 4 2.9 6.5 4.1s5 2.3 7.8 3.5c3.4 1.4 6.2 2.6 8.5 3.7 2.3 1 4.2 2.1 5.6 3.2 1.4 1.1 2.4 2.4 3 3.8.6 1.4.9 3.1.9 5.1 0 4.1-1.7 7.1-5.2 8.8s-7.8 2.6-13.1 2.6c-2.9 0-5.5-.2-7.7-.6-2.2-.4-4.1-.8-5.7-1.3-1.6-.5-2.9-1-3.8-1.4s-1.5-.7-1.8-.9L2 111.7c1.1.6 3.4 1.4 6.8 2.5s8.3 1.6 14.7 1.6c8.6 0 15.3-1.7 20.3-5.1s7.4-8.4 7.4-15c0-3.5-.6-6.4-1.8-8.7-1.3-2.2-2.9-4.2-4.9-5.8zM150.3 57.3c-1.6 5.8-3.2 11.5-5 17.2s-3.6 11.1-5.4 16.2c-1.8 5.1-3.5 9.5-5.1 13.1-1.9-4.7-3.8-9.8-5.6-15.1-1.8-5.4-3.6-10.8-5.2-16.3s-3.1-10.9-4.5-16.2-2.5-10.3-3.3-15h-7.9c-1.1 4.7-2.4 9.7-3.8 15-1.4 5.3-2.9 10.7-4.5 16.2s-3.3 10.9-5.1 16.3-3.6 10.4-5.4 15.1c-1.6-3.6-3.3-7.9-5.2-13-1.8-5.1-3.7-10.5-5.5-16.2-1.8-5.7-3.5-11.4-5-17.2s-2.9-11.2-3.9-16.2h-9.8c3.4 14.3 7.1 27.4 11.1 39.3s8.4 23.1 13.2 33.8h8.8c1.4-3.3 2.9-7 4.5-11.1s3.2-8.5 4.8-13.1c1.6-4.7 3.2-9.6 4.8-14.7s3-10.4 4.4-15.8c1.4 5.4 2.9 10.6 4.5 15.7 1.5 5.1 3.2 10 4.8 14.7s3.3 9 4.8 13.1c1.6 4.1 3.1 7.8 4.5 11.1h8.5c4.8-10.6 9.2-21.9 13.3-33.7 4-11.9 7.7-25 11.1-39.3h-9c-1.1 4.9-2.4 10.3-3.9 16.1zM265.8 49.9c-3.2-3.3-6.9-5.8-11.3-7.6-4.4-1.7-9.3-2.6-14.6-2.6-6.5 0-11.9.4-16.1 1.3s-7.7 1.7-10.5 2.7v96.7h9.2V110c1.6 1.2 4.2 2.5 7.7 3.9s7.7 2.1 12.5 2.1c5.3 0 10-.9 14.1-2.8s7.6-4.5 10.4-7.8 5-7.4 6.4-12c1.5-4.7 2.2-9.8 2.2-15.3 0-5.9-.9-11.3-2.6-16-1.8-4.9-4.2-8.9-7.4-12.2zm-1.1 39.4c-.8 3.6-2.2 6.8-4.1 9.5-1.9 2.7-4.4 4.8-7.4 6.4-3.1 1.6-6.8 2.3-11.4 2.3-2.2 0-4.2-.2-6.2-.6-2-.4-3.8-1-5.5-1.6-1.7-.7-3.2-1.4-4.5-2.1-1.3-.8-2.3-1.5-3.2-2.1V50c1.4-.5 3.5-.9 6.3-1.3s6.4-.6 10.9-.6c7.9 0 14.3 2.6 19.1 7.7 4.8 5.1 7.2 12.5 7.2 22.1.1 4-.3 7.8-1.2 11.4zM323.7 39.4c-4 0-8 .8-11.8 2.3-3.8 1.6-7.2 3.9-10.2 7.1-3 3.2-5.4 7.2-7.2 11.9s-2.8 10.3-2.8 16.7c0 5.6.7 10.7 2 15.3s3.4 8.7 6.4 12.1 6.6 6 11.2 7.9c4.5 1.9 10 2.8 16.4 2.8 4.9 0 9.2-.5 12.8-1.6s6.1-1.9 7.4-2.7l-1.7-7.9c-1.3.7-3.4 1.5-6.4 2.4-2.9.9-6.9 1.4-11.9 1.4-9 0-15.6-2.4-19.8-7.2-4.2-4.8-6.4-11.7-6.6-20.6h51.3c.1-.7.2-1.4.2-2.1 0-.8.1-1.5.1-2.3 0-12.1-2.7-21.1-8-27-5.3-5.6-12.5-8.5-21.4-8.5zm-21.9 32.4c.2-3.2.8-6.3 1.9-9.2 1.1-2.9 2.6-5.5 4.5-7.7s4.2-4 6.8-5.3 5.5-2 8.8-2c6.2 0 11 2.1 14.4 6.4 3.4 4.2 5.2 10.2 5.4 17.8h-41.8zM469.5 49c-3.1-3.4-6.8-6-11.2-7.8-4.4-1.8-9.2-2.8-14.3-2.8-5.2 0-9.9.9-14.3 2.8-4.3 1.8-8.1 4.4-11.2 7.8-3.2 3.4-5.6 7.5-7.3 12.2-1.7 4.8-2.6 10.1-2.6 15.9s.9 11.2 2.6 16c1.7 4.8 4.2 8.9 7.3 12.3 3.1 3.4 6.8 6 11.2 7.9 4.3 1.9 9.1 2.8 14.4 2.8 5.3 0 10.1-.9 14.5-2.8s8.1-4.5 11.2-7.9c3.1-3.4 5.5-7.5 7.2-12.3 1.7-4.8 2.5-10.1 2.5-16s-.9-11.1-2.6-15.9c-1.9-4.7-4.3-8.8-7.4-12.2zm-12.4 45.8c-3.2 4.3-7.6 6.5-13.2 6.5s-10.1-2.2-13.2-6.5c-3.2-4.3-4.7-10.2-4.7-17.7 0-7.3 1.6-13.2 4.7-17.4 3.2-4.3 7.6-6.4 13.2-6.4s10 2.1 13.2 6.4c3.2 4.3 4.7 10.1 4.7 17.4 0 7.5-1.6 13.4-4.7 17.7zM556 49.3c-2.7-3.4-6.2-6-10.2-7.8-4.1-1.8-8.7-2.8-13.9-2.8-3.5 0-6.7.4-9.5 1.3s-5.3 1.8-7.3 2.8V4.5L498 7.3v104.6c3.4 1 7.7 2 12.8 2.8 5.1.9 10.5 1.3 16.2 1.3 5.8 0 11.1-.9 15.7-2.7 4.6-1.8 8.5-4.4 11.8-7.8s5.7-7.5 7.5-12.2c1.7-4.8 2.6-10.1 2.6-16 0-5.8-.7-11-2.2-15.8-1.6-4.7-3.7-8.8-6.4-12.2zm-14.4 45.4c-3.6 4.3-8.5 6.4-14.8 6.4-2.7 0-5.1-.1-7-.4-1.9-.2-3.5-.5-4.7-.8V57.5c1.5-1 3.5-2 6-2.8 2.5-.8 5.2-1.3 8-1.3 6.2 0 10.8 2.1 13.6 6.4 2.9 4.2 4.3 10 4.3 17.2-.1 7.5-1.9 13.4-5.4 17.7zM625.9 79.7c-1.8-1.8-4.2-3.5-7-4.9-2.8-1.5-6.3-2.9-10.3-4.4-2.5-.8-4.5-1.7-6.2-2.5-1.7-.8-3.1-1.6-4.1-2.4s-1.8-1.7-2.2-2.6c-.4-.9-.6-2-.6-3.2 0-2.4 1.1-4.3 3.2-5.4s5-1.8 8.5-1.8c3.9 0 7.2.3 10.2 1.1s5.3 1.5 7.2 2.3l3.1-13.8c-2-.8-5-1.5-8.9-2.3-4-.8-8.1-1.2-12.4-1.2-8.6 0-15.4 2-20.3 5.9-5 3.9-7.5 9.3-7.5 16 0 3.5.5 6.4 1.6 8.8s2.6 4.4 4.5 6.2 4.1 3.2 6.7 4.5 5.4 2.5 8.5 3.6c5.1 1.9 8.7 3.6 11 5.2 2.2 1.6 3.3 3.6 3.3 6.1 0 2.6-1 4.5-3.1 5.6s-5.4 1.6-9.9 1.6-8.5-.5-12.1-1.4-6.6-1.9-9.1-3l-3 14.3c1.6.7 4.4 1.5 8.3 2.6s9.2 1.6 15.7 1.6c9.7 0 17.2-1.8 22.4-5.4 5.2-3.6 7.8-9 7.8-16 0-3.3-.4-6.1-1.3-8.5-.8-2.6-2.2-4.7-4-6.6zM179.8 41.1h9.2v73h-9.2zM373.6 111.9c0 4.6-.8 8.1-2.4 10.4-1.6 2.3-4.4 3.5-8.3 3.5-2.9 0-5.4-.3-7.5-1l-2.3 14c1.7.7 3.7 1.1 5.9 1.3 2.2.2 3.9.4 5.2.4 8.6 0 15.1-2.3 19.7-6.9 4.6-4.6 6.8-11.7 6.8-21.3V40.2h-17.1v71.7zM635.7 17.8c.5-.7.8-1.6.8-2.7 0-1.6-.5-2.8-1.5-3.6s-2.5-1.2-4.3-1.2H625v16.1h2.8v-6.2h3.1l3.2 6.2h3v-.1l-3.6-6.7c.9-.5 1.7-1.1 2.2-1.8zm-5.1.1h-2.9v-5.4h3c1 0 1.7.3 2.2.7s.7 1.1.7 2c0 .8-.3 1.5-.8 2s-1.2.7-2.2.7z"
                  ></path>
                  <path
                    fill="white"
                    d="M631 2.5c-8.7 0-15.8 7.1-15.8 15.8s7.1 15.8 15.8 15.8 15.8-7.1 15.8-15.8-7-15.8-15.8-15.8zm0 29.2c-7.4 0-13.4-6-13.4-13.4s6-13.4 13.4-13.4 13.4 6 13.4 13.4-6 13.4-13.4 13.4z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </Link>
      </div>
      <div className="flex items-center text-base text-white md:text-2xl">
        <Link href="/">
          <>{`Suman Kumar`}</>
        </Link>
      </div>
    </nav>
    {children}
  );
};

export default HeaderNav;
