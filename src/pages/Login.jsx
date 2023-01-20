import React from "react";
import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/create-post");
    });
  };

  return (
    <div className="loginPage">
      <h2>Sign in </h2>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
