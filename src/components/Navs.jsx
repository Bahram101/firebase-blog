import React from "react";
import { Link } from "react-router-dom";

const Navs = ({ isAuth, signUserOut }) => {
  return (
    <nav className="flex justify-around">
      <div className="left">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="right">
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="/create-post">Create post</Link>
            <button  onClick={signUserOut} className="text-2xl  border-l-[1px] border-white-900 pl-2">
                Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navs;
