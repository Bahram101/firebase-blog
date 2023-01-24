import React, { useState, useEffect } from "react";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);
  const postCollection = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollection);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [postList]);

  const deletePost = (id) => {
    const postDoc = doc(db, "posts", id);
    deleteDoc(postDoc);
  };

  return (
    <div className="homePage">
      {postList.map((post) => (
        <div className="post" key={post.id}>
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="deletePost">
              {isAuth && post.author.id === auth.currentUser.uid && (
                <button onClick={() => deletePost(post.id)}>
                  {<XMarkIcon className="h-4 w-4 opacity-80" />}
                </button>
              )}
            </div>
          </div>
          <div className="postTextContainer">{post.text}</div>
          <h3>{post.author.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
