import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
      <div className="h-[80px] px-36 max-xl:px-16 max-sm:px-4 flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-4xl max-sm:text-3xl font-bold italic ">
            MediPrice
          </h1>
        </Link>
        <div className="max-md:hidden">
          <Search />
        </div>
        <div className="flex justify-center items-center gap-10 max-sm:gap-6 text-lg max-lg:text-base text-neutral-500">
          {!isLoggedIn && (
            <Link to={"/login"}>
              <button className="hover:text-neutral-700 transition-colors duration-300">
                Log in
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to={"/signup"}>
              <button className="hover:text-neutral-700 transition-colors duration-300">
                Sign up
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to={"/"}>
              <button
                className="hover:text-neutral-700 transition-colors duration-300"
                onClick={() => {
                  setIsLoggedIn(false);
                  // toast.success("Logged Out");
                }}>
                Logout
              </button>
            </Link>
          )}
        </div>
      </div>
  );
};

export default Navbar;
