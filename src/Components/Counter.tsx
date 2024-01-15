import React, { useState } from "react";
import "./Counter.css";
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="countainer">
      <div className="counter">
        <button className="incBtn" onClick={() => setCount(count + 1)}>
          +
        </button>
        <h3 className="text">Count: {count}</h3>
        <button className="decBtn" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
}
