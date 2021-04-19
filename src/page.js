const Count = () => {
  const { state, dispatch } = useRematch(len);
  return (
    <div style={{ textAlign: "center", marginTop: "20rem" }}>
      <h1>The num is: {state}</h1>
      <button onClick={() => dispatch.addBy()}>Add 1</button>
      <button onClick={() => dispatch.addByTwo()}>Add 2</button>
      <button onClick={() => dispatch.addByAsync()}>Add 1 Async</button>
      <button onClick={() => dispatch.addByTwoAsync()}>Add 2 Async</button>
    </div>
  );
};
