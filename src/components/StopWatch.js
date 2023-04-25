import React, { useRef, useState } from "react";
const StopWatch = () => {
  const [time, setTime] = useState(45000);
  const timerId = useRef(null);
  const [btnText, setBtnText] = useState("Start");

  function handleStart() {
    if (btnText === "Start") {
      timerId.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
      setBtnText("Stop");
    } else {
      setBtnText("Start");
      clearInterval(timerId.current);
    }
  }

  function handleReset() {
    clearInterval(timerId.current);
    setTime(0);
  }
  return (
    <div className="stopwatch">
      <div>
        {Math.floor(time / 60000)}m{" "}
        {Math.floor(time / 1000) -
          (Math.floor(time / 60000) > 0 ? Math.floor(time / 60000) : 0) * 60}
        s <span>{(time % 1000) / 10}</span>
      </div>
      <div className="buttons">
        <button type="button" onClick={handleStart}>
          {btnText}
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default StopWatch;
