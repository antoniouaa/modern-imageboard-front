import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Post from "./Post";

export default function Thread() {
  const { postId } = useParams();

  let url = new URL("https://modern-imageboard.herokuapp.com/replies");
  url.search = new URLSearchParams({
    postid: postId,
  });
  const [rootPost, setRootPost] = useState({});
  const [thread, setThread] = useState([]);

  useEffect(() => {
    getThread();
  }, []);

  const getThread = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const [root, ...t] = data.data;
        setRootPost(root);
        setThread(t);
      });
  };

  console.log(thread);

  return (
    <div className="Post-Container">
      <Post details={rootPost} linksTo={false} replies={thread} />
    </div>
  );
}
