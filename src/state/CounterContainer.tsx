import { useState, useCallback } from "react";
import createContainer from "../unstated-next";

function useCounter(initialState = 10) {
  let [count, setCount] = useState(initialState);

  let decrement = useCallback(() => setCount(count => count - 1), []);
  let increment = useCallback(() => setCount(count => count + 1), []);

  return { count, decrement, increment };
}

export default createContainer(useCounter);
