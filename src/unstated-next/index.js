import { createContext, createElement, useContext } from "react";

export default useHook => {
  const Context = createContext(); //创建共享功能
  const Provider = ({ init, children }) => {
    const value = useHook(init); //共享数据和共享方法的对象
    return createElement(Context.Provider, { value }, children);
  };
  /**
   * 调用 xxx.Provider 时相当于创建react元素 等同于返回：
   * <Context.Provider value={useHook(init)}>
   *   {children}
   * </Context.Provider>
   */

  const useContainer = () => useContext(Context);
  /**
   * 调用 xxx.useContainer 返回所有的 useHook(init) 即共享的值和方法d
   */
  return {
    Provider,
    useContainer,
  };
};
