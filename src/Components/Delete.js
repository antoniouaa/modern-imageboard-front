import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Thread() {
  const { postId } = useParams();

  let url = new URL("https://modern-imageboard.herokuapp.com/delete");
  url.search = new URLSearchParams({
    postid: postId,
  });

  useEffect(() => {
    deletePost();
  });
  let message = "unknown status";
  const deletePost = () => {
    //TODO: ask for password to put here
    //TODO: make message be the response body.message
    fetch(url, {
      method: 'DELETE',
      body: { password: "somePassword" }
    })
      .then((res) => {
          message = "Deleted Successfully"
      })
      .catch((res) => {
        message = res.message
      })
  };

  return (
    <div className="About-Container">
      <div className="About">
        {message}
      </div>
    </div>
  );
}
