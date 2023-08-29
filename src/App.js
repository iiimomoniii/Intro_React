import React, {useState} from "react";

export default () => {
  let var1 = 0;
  //count = variable
  //setCount = function for count variable
  //0 = initial variable
  const [count, setCount] = useState(0)
  return (
    <div>
      JSX
      <h1>Count {count}</h1>
      <button
        onClick={() => {
          var1 = var1 + 1;
          //action
          setCount(count+1);
          console.log(var1);
        }}
      >
        Add
      </button>
    </div>
  );
};
