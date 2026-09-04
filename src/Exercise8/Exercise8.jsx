import { useState, useEffect } from "react";

const countdown = () => {
  const [previousTime, setPreviousTime] = useState(100);
  const [timeLeft, setTimeLeft] = useState(100);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000);
    }

    return(()=> {
      clearInterval(timerId)
    })
  }, [isRunning, timeLeft])

  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(previousTime);
  };

  const handleTimeChange = (e) => {
    const value = Number(e.target.value);
    setPreviousTime(value);
    setTimeLeft(value);
    setIsRunning(false);
  }

  return (
    <div>
      <h1>Counter Down Timer</h1>
      <label htmlFor="htmlFor">Set Time (Seconds) : </label>
      <input
        type="number"
        name="time"
        id="time"
        value={previousTime}
        onChange={handleTimeChange}
      />

      <h1>Time Left: {timeLeft} Seconds</h1>

      <button disabled={isRunning || timeLeft === 0} onClick={handleStart}>Start</button>
      <button disabled={!isRunning} onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default countdown;