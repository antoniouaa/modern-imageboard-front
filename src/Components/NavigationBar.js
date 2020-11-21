import React from "react";

export default function NavigationBar(props) {
  const style = {
    "background-color": "#e3f2fd;",
  };
  return (
    <nav class="navbar navbar-light" style={style}>
      <div class="container">
        <ul class="nav navbar-nav">
          <li>
            <a href="/">
              <span class="glyphicon glyphicon-home"></span> Home
            </a>
          </li>
          <li>
            <a href="/archive">
              <span class="glyphicon glyphicon-th"></span> Archive
            </a>
          </li>
          <li>
            <a href="/about">
              <span class="glyphicon glyphicon-info-sign"></span> About
            </a>
          </li>
          <li>
            <a href="/blog">
              <span class="glyphicon glyphicon-bullhorn"></span> Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
