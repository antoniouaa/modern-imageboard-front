import React from "react";

import "./Styles.css";

export default function Post(props) {
  const {
    content,
    date,
    filenames,
    id,
    name,
    replyto,
    tags,
    views,
  } = props.details;
  return (
    <div className="post">
      <h6>
        @{id}, By {name} at {date}
      </h6>
      <h3>{content}</h3>
      <p>Replied to: {replyto}</p>
      <p>Viewed {views} times</p>
      <p>Tags: {tags}</p>
      <p>{filenames}</p>
    </div>
  );
}
