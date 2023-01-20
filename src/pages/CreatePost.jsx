import React from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const postsCollection = collection(db, 'posts')

  // const createPost = sync ()=>{
  //   // await addDoc(postsCollection)
  // } 

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button>Submit post</button>
      </div>
    </div>
  );
};

export default CreatePost;
