import React from "react";
import { Link } from "react-router-dom";

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
    <div className="Post">
      <h6>
        @{id}, By {name} at {date}
      </h6>
      <hr />
      <h3>
        {content ? (
          <span>
            <br />
            {content}
          </span>
        ) : (
          "Empty Post"
        )}
        <hr />
      </h3>
      <span>
        <Link to={`/post/${id}`}>View Thread</Link>
      </span>
      <hr />
      {replyto ? <span>Replied To: #{replyto}</span> : null}
      {views ? <span>Views: {views}</span> : null}
      {Array.isArray(tags) && tags.length ? (
        <span>Tags: {tags.map((tag) => `#${tag}`).join(" ")}</span>
      ) : null}
      {console.log(replyto)}
      {Array.isArray(filenames) && filenames.length ? (
        <div>
          <span>Filenames:</span>
          <ol>
            {filenames.map((f) => (
              <li>{f}</li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}
