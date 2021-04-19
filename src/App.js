import React from "react";
import CounterPage from "./page/counter";
import TodoListPage from "./page/todolist";
import CounterContainer from "./state/CounterContainer";
import TodoListContainer from "./state/TodoListContainer";

// function compose(...containers) {
//   return function Component(props) {
//     console.log(props);
//     return containers.reduceRight((children, Container) => {
//       console.log(children, Container, props.children);
//       return <Container.Provider>{children}</Container.Provider>;
//     }, props.children);
//   };
// }
// let Provider = compose(CounterContainer, TodoListContainer);
// // 放在顶层
// export default () => {
//   return (
//     <Provider>
//       <CounterPage />
//       <TodoListPage />
//     </Provider>
//   );
// };
/**
 * 相当于：
 * <CounterContainer.Provider>
 *  <TodoListContainer.Provider>
     <xxx.Provider>
         MyApp
     </xxx.Provider>
 *  </TodoListContainer.Provider>
 * </CounterContainer.Provider>
 */

//嵌套数据多层应用
export default () => (
  <div>
    <CounterContainer.Provider>
      <CounterPage />
      <TodoListContainer.Provider>
        <TodoListPage />
      </TodoListContainer.Provider>
    </CounterContainer.Provider>
  </div>
);
