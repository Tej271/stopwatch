import React from "react";

export default function Buttons(props) {
  const StartButton = <button onClick={props.handleStart}>Start</button>;

  const ActiveButtons = (
    <div>
      <button onClick={props.handleReset}>Reset</button>
      <button onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </button>
      <button onClick={props.handleSplit}>Split</button>
    </div>
  );

  return <div>{props.active ? ActiveButtons : StartButton}</div>;
}
