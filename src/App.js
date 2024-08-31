import React, { useState } from "react";
import "./App.css";
import PadBank from "./Padbank";

function App() {
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [volume, setVolume] = useState(50);
  const [currentPad, setCurrentPad] = useState(null);

  const handlePowerToggle = () => {
    setIsPowerOn(!isPowerOn);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const handlePadClick = (pad) => {
    setCurrentPad(pad);
  };

  return (
    <div id="drum-machine" className="app">
      <div className="container">
        <div className="pad-bank-container">
          <PadBank
            isPowerOn={isPowerOn}
            volume={volume}
            onPadClick={handlePadClick}
          />
        </div>
        <div className="controls-container">
          <button
            className={`power-button ${isPowerOn ? "power-on" : "power-off"}`}
            onClick={handlePowerToggle}
          >
            {isPowerOn ? "Power On" : "Power Off"}
          </button>
          <div id="display" className="display">
            {currentPad ? currentPad.name : "Drum Machine"}
          </div>
          <label htmlFor="volume-slider">Volume</label>
          <input
            type="range"
            min="0"
            max="100"
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
