/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              The Clique
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            {navbarOpen ? (
              ""
            ) : (
              <ul className="flex flex-col lg:flex-row list-none mr-auto">
                <li className="flex items-center m-2">
                  {/* <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-auth-navbar"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a> */}
                  &nbsp;
                </li>

                <li className="flex items-center">
                  <Link
                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    to="/"
                  >
                    Services
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    to="/"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            )}

            <ul className={`flex ${navbarOpen ?'pt-2':'flex-col'} lg:flex-row list-none lg:ml-auto`}>
              {/* <li className="flex items-center">
                <PagesDropdown />
              </li> */}
              {navbarOpen ? (
                <li className="flex items-center ">
                  <Link
                    className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    to="/auth/login"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li className="flex items-center">
                  <Link
                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    to="/auth/login"
                  >
                    Login
                  </Link>
                </li>
              )}

              <li className="flex items-center">
                <Link to="/auth/register">
                  <button
                    className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fas fa-user-plus"></i> Register
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
