import "./index.css";

function Counter(props) {
  const { value, onIncrement, onDecrement } = props;
  return (
    <div className="counter">
      <p>
        <b>{value}</b>
      </p>
      <div className="counter-controls">
        <button
          className="button is-danger is-small"
          onClick={() => {
            onDecrement(1);
          }}
        >
          -
        </button>
        <button
          className="button is-success is-small"
          onClick={() => {
            onIncrement(1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Counter;
