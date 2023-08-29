import React from "react";

export default () => {
  let var1 = 0;

  return (
    <div>
      JSX
      <h1>count {var1}</h1>
      <button
        onClick={() => {
          var1 = var1 + 1;
          console.log(var1);
        }}
      >
        Add
      </button>
    </div>
  );
};
