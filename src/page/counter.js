import React from "react";
import CounterContainer from "../state/CounterContainer";

export default () => {
  let counter = CounterContainer.useContainer();
  console.log("数字变化 render");
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  );
};
