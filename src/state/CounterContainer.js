import { useState } from "react";
import createContainer from "../unstated-next";

function useCounter(initialState = 10) {
  let [count, setCount] = useState(initialState);
  let decrement = () => setCount(count => count - 1);
  let increment = () => setCount(count => count + 1);
  return { count, decrement, increment };
}

export default createContainer(useCounter);
