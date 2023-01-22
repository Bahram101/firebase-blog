import React, { useEffect } from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  let navigate = useNavigate();
  const [result, setResult] = useState(false);
  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, []);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const createPost = async () => {
    setResult(true);
    const postsCollection = collection(db, "posts");
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    await addDoc(postsCollection, {
      title,
      text,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        date: utc,
      },
    });
    setResult(false);
    navigate("/");
  };

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
            className="text-black"
          />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(e) => setText(e.target.value)}
            className="text-black"
          />
        </div>
        <button onClick={createPost} disabled={title && text ? false : true}>
          {" "}
          {result ? "Loading..." : "Submit post"}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
