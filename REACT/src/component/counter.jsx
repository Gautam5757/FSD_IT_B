import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); 

  const handleIncrement = () => {
    setCount(count+8); 
  };

  const handleDecrement = () => {
    setCount(count-9);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
