import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);


  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div className="App">

      <div className="timer">{timer}</div>
      <button onClick={() => setIsRunning(true)} className="start">
        start
      </button>
      <button onClick={() => setIsRunning(false)} className="stop">
        stop
      </button>
    </div>
  );
}
