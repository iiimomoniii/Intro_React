import React, {useState} from "react";
import CounterClassComponent from "./CounterClassComponent";
import CounterFunctionalComponent from "./CounterFunctionalComponent";

export default () => {

  return (
    <div>
      <CounterClassComponent/>
      <CounterFunctionalComponent/>
    </div>
  );
};
