import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import "./App.css";
import Contact from "./pages/Contact";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then((res) => {
      localStorage.removeItem("isAuth");
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout isAuth={isAuth} signUserOut={signUserOut} />}
      >
        <Route index element={<Home isAuth={isAuth}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-post" element={<CreatePost isAuth={isAuth} />} />
        <Route
          path="/login"
          element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
