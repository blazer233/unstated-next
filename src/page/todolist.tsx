import React, { useState } from "react";

import CounterContainer from "../state/CounterContainer";
import TodoListContainer from "../state/TodoListContainer";

export default function TodoListPage() {
  const counter: any = CounterContainer.useContainer();
  const todoList: any = TodoListContainer.useContainer();
  const [inputValue, setInputValue] = useState("");
  console.log("--清单渲染 render--");
  const addItem = () => {
    counter.increment();
    let item = { id: counter.count, title: inputValue };
    todoList.add(item);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h4>todo list</h4>
      <p>current id = {counter.count}</p>
      <div>
        <input
          style={{ borderWidth: "1px", borderColor: "red", height: "30px" }}
          onChange={e => setInputValue(e.target.value)}
        />
        <span
          onClick={addItem}
          style={{
            marginLeft: "10px",
            backgroundColor: "red",
            padding: "8px",
            borderRadius: "8px",
            color: "white",
          }}
        >
          add item
        </span>
      </div>

      {todoList?.todoList?.map(
        (item: { id: number; title: React.ReactNode }) => (
          <ul key={item.id + 10}>
            <li
              onClick={() => todoList.del(item)}
              style={{ cursor: "pointer" }}
            >
              {item.title}
            </li>
          </ul>
        )
      )}
    </div>
  );
}
