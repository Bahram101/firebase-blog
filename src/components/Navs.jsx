import React from "react";
import { Link } from "react-router-dom";

const Navs = ({ isAuth, signUserOut }) => {
  return (
    <nav className="flex justify-around">
      <div className="left">
        <Link to="/">Home</Link>
        {isAuth && <Link to="/create-post">Create post</Link>}
      </div>
      <div className="right">
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={signUserOut} className="text-xl">Sign out</button>
        )}
      </div>
    </nav>
  );
};

export default Navs;
