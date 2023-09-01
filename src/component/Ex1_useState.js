import React from "react";
import { useState } from "react";

export default function Ex1_useState() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  return (
    <div>
      UseState Count : {count}
      <br />
      <button onClick={() => {setCount(count + 1);}}>
        Add
      </button>
      <br />
      UseState Title : {title}
      <br />
      <button onClick={() => { setTitle("React Hook");}}>
        Set
      </button>
    </div>
  );
}
