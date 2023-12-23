import Counter from "./Components/Counter";
import "./App.css";
import { useState } from "react";
import Total from "./Components/Total";

function App() {
  const [data, setData] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]);
  const [total, setTotal] = useState(0);
  console.log(data);
  const onIncrement = (id) => (value) => {
    setData((prevData) => {
      const newData = [...prevData];
      let oldvalue = newData[id - 1].value;
      newData.splice(id - 1, 1, { id: id, value: oldvalue + value });
      return newData;
    });
    setTotal((prev) => prev + value);
  };
  const onDecrement =(id) => (value) => {
    setData((prevData) => {
      const newData = [...prevData];
      let oldvalue = newData[id - 1].value;
      newData.splice(id - 1, 1, { id: id, value: oldvalue - value });
      return newData;
    });
    setTotal((prev) => prev - value);
  };

  return (
    <div className="bg">
      {data.map((counter) => (
        <Counter
          key={counter.id}
          value={counter.value}
        //   id={counter.id}
          onIncrement={onIncrement(counter.id)}
          onDecrement={onDecrement(counter.id)}
        />
      ))}
      <Total total={total} />
    </div>
  );
}

export default App;
