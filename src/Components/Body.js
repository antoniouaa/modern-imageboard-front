import React, { useEffect, useState } from "react";

import GridList from "@material-ui/core/GridList";

import Post from "./Post";
import MakePost from "./MakePost";

import "./Styles.css";

export default function Body() {
  const [posts, setPosts] = useState([]);
  const URL = "https://modern-imageboard.herokuapp.com/allposts";

  useEffect(() => {
    updatePage();
  }, []);

  const updatePage = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  return (
    <div className="Body">
      <MakePost onFormPost={updatePage} />
      <GridList className="Body-Post-Grid" cols="1">
        {[].concat(posts).map((post, i) => {
          return <Post details={post} linksTo={true} />;
        })}
      </GridList>
    </div>
  );
}
