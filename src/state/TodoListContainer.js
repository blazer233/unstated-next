import { useState } from "react";
import createContainer from "../unstated-next";

const useTodoList = (initState = []) => {
  const [todoList, setTodoList] = useState(initState);
  let add =item => setTodoList([...todoList, item])
  let del =({ id }) => setTodoList(todoList.filter(({ id: ids }) => ids !== id))
  return { todoList, add, del };
};

export default createContainer(useTodoList);
