import React from "react";

import "./Styles.css";

export default function About(props) {
  return (
    <div className="About-Container">
      <div className="About">
        <h3>modern-imageboard</h3>
        After being disillusioned by the likes of twitter and facebook, we have decided it is time to reclaim users' anonymity on the internet. Post whatever you like, as long as it is legal. The server automatically deletes the oldest 1000th post so you can be sure no one will find your posts from 2013 when you're running for president 10 years from now.
        <p>
          A project by <a href="https://github.com/erikoui">erikoui</a> and
          <a href="https://github.com/antoniouaa"> antoniouaa</a>
        </p>
      </div>
    </div>
  );
}
