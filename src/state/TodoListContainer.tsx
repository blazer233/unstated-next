import { useState, useCallback } from "react";
import createContainer from "../unstated-next";

const useTodoList = (initState = []) => {
  const [todoList, setTodoList] = useState<any>(initState);
  let add = useCallback(item => setTodoList([...todoList, item]), [todoList]);
  let del = useCallback(
    ({ id }) => setTodoList(todoList.filter(({ id: ids }: any) => ids !== id)),
    [todoList]
  );
  return { todoList, add, del };
};

export default createContainer(useTodoList);
