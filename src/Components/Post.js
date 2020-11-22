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
      <h3>
        {content ? (
          <span>
            Content:
            <br />
            {content}
          </span>
        ) : (
          "Empty Post"
        )}
      </h3>
      <span>Replied to: {replyto ? replyto : "No reply"}</span>
      <br />
      <span>{views ? `Views: ${views}` : "No views"}</span>
      <br />
      <span>{tags ? `Tags: ${tags.join(", ")}` : ""}</span>
      <br />
      {filenames ? (
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
