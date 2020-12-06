import React from "react";
import { Link } from "react-router-dom";

import "./Styles.css";

export default function Post({ details, linksTo, replies = [] }) {
  const { content, date, filenames, id, name, replyto, tags, views } = details;
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
        ) : null}
      </h3>
      {linksTo ? (
        <span>
          <Link to={`/post/${id}`}>View Thread</Link> <Link to={`/delete/${id}`}>Delete</Link>
        </span>
      ) : null}
      <hr />
      {replyto ? <span>Replied To: #{replyto}</span> : null}
      {views ? <span>Views: {views}</span> : null}
      {Array.isArray(tags) && tags.length ? (
        <span>Tags: {tags.map((tag) => `#${tag}`).join(" ")}</span>
      ) : null}
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
      {Array.isArray(replies) && replies.length
        ? replies.map((r) => <Post details={r} linksTo={false} />)
        : null}
    </div>
  );
}
