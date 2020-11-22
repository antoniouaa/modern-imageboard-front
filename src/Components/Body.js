import React, { useEffect, useState } from "react";

import GridList from "@material-ui/core/GridList";

import Post from "./Post";

export default function Body() {
  const [posts, setPosts] = useState([]);
  const url = "https://modern-imageboard.herokuapp.com/allposts";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="Body">
      <GridList className="Body-Post-Grid" cols="1">
        {[]
          .concat(posts)
          .reverse()
          .map((post, i) => {
            return <Post details={post} />;
          })}
      </GridList>
    </div>
  );
}
