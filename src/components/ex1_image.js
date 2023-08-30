import React from "react";

export default function ex1_image(props) {
  return (
    <div>
      <img src="/logo512.png" height="100" />
      <img src="/images/giphy.gif" height="200" />
      {props.image && <img src={props.image} height="200" />}
    </div>
  );
}
