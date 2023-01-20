import { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate()

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
        <Route index element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Route>
    </Routes>
  );
}

export default App;
