import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const Home = () => {
  const [postList, setPostList] = useState([]);
  const postCollection = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollection);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <div className="homePage">
      {postList.map((post) => (
        <div className="post">
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
          </div>
          <div className="postTextContainer">
            {post.text}
          </div>
          <h3>{post.author.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
