import { createContext, createElement, useContext } from "react";
export const unstated = useHook => {
  const Context = createContext();
  const Provider = ({ init, children }) => {
    return createElement(Context.Provider, { value: useHook(init) }, children);
  };
  const useContainer = () => useContext(Context);
  return { Provider, useContainer };
};
export const reduceProvider = (...commonFun) => ({ children }) => {
  return commonFun.reduceRight((child, { init, Provider }) => {
    return <Provider init={init}>{child}</Provider>;
  }, children);
};
