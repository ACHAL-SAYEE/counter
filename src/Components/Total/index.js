import "./index.css";

function Total(props) {
  const { total } = props;
  return (
    <div className="total">
      <p>
        Total:
        <b>{total}</b>
      </p>
    </div>
  );
}
export default Total;
