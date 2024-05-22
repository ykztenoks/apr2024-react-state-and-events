function Counter({ count, setCount }) {
  return (
    <div className="Counter">
      <h2>Counter 1</h2>

      <p>You clicked {count} times on the first counter</p>

      <button onClick={() => setCount((previous) => previous - 1)}> - </button>
      <button onClick={() => setCount((previous) => previous + 1)}> + </button>
    </div>
  );
}

export default Counter;
