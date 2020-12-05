import React from "react";
import { useParams } from "react-router-dom";

export default function Thread() {
  const { id } = useParams();
  return <div>Hello world {id} </div>;
}
