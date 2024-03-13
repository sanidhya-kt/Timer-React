import { useState, useEffect } from "react";
import "./style.css"

const MyTimer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCount(count + 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div className="timer">

      <p id="example2">Stopwatch timer : {count}</p>
    </div>
  );
};

export default MyTimer;
