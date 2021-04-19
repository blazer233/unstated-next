import React, { useState } from "react";
import { unstated, reduceProvider } from "./unstated-next";

function useCounter(initialState = 0) {
  let [count, setCount] = useState(initialState);
  let decrement = () => setCount(count - 1);
  let increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

let Counter = unstated(useCounter);

function CounterDisplay() {
  let counter = Counter.useContainer();
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  );
}

const Provider = reduceProvider({ ...Counter, init: 100 });
export default () => (
  <Provider>
    <CounterDisplay />
  </Provider>
);
//Provider hell
// export default () => (
//   <Counter.Provider>
//     <CounterDisplay />
//   </Counter.Provider>
// );
