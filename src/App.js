import "./App.css";
import Watch from "./components/Watch";
import Buttons from "./components/Buttons";
import React, { useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const [arr, setArr] = useState([]);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleSplit = () => {
    setArr([...arr, time]);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <>
      <Watch time={time} />
      <Buttons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
        handleSplit={handleSplit}
      />
      {arr.map((e, index) => (
        <div className="timer">
          [#{index + 1}]
          <span className="digits">
            {("0" + Math.floor((e / 60000) % 60)).slice(-2)}:
          </span>
          <span className="digits">
            {("0" + Math.floor((e / 1000) % 60)).slice(-2)}.
          </span>
          <span className="digits mili-sec">
            {("0" + ((e / 10) % 100)).slice(-2)}
          </span>
        </div>
      ))}
    </>
  );
}
