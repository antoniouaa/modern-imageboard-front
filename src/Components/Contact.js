import React from "react";

import "./Styles.css";

export default function Contact(props) {
  return (
    <div className="Contact-Container">
      <div className="Contact">
        <h3>Contact the team</h3>
        If, for some reason, you need to have a chat with the creators about the site, feel free to open an issue on github.
        <p>
          Github: <a href="https://github.com/erikoui">erikoui</a>,
          <a href="https://github.com/antoniouaa"> antoniouaa</a>
        </p>
      </div>
    </div>
  );
}
