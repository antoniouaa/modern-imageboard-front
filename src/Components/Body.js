import React, { useEffect, useState } from "react";

import Post from "./Post";

export default function Body() {
  const [posts, setPosts] = useState([]);
  const url = "https://modern-imageboard.herokuapp.com/allposts";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  console.log(posts);

  return (
    <div className="container post-container">
      {posts.map((post) => {
        return <Post details={post} />;
      })}
    </div>
  );
}
