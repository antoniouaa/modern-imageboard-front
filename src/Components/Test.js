import React, { useEffect, useState } from "react";

export default function Test() {
  const [state, setState] = useState("");
  const url = "https://modern-imageboard.herokuapp.com/test";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  console.log(state);

  return <p>Test: {state.message}</p>;
}
