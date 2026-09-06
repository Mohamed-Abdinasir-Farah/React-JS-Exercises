import { useState } from 'react';

const countDown = () => {
  const [number, setNumber] = useState(0);
  const [increment, setIncrement] = useState(false);
  const [decrement, setDecrement] = useState(false);

  const handleIncrement = () => {
    const Number = number + 1;
    setNumber(Number);
  }

  const handleDecrement = () => {
    if (number > 0) {
      const Number = number - 1;
      setNumber(Number);
    } else {
      null
    }
  }

  return (
    <div>
      <h1>Count : {number}</h1>

      <button onClick={handleIncrement}>Increment</button>
      <button disabled={number === 0} onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default countDown;