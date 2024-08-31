import React, { useState } from "react";
import "./App.css";
import PadBank from "./Padbank";
import Controls from "./Controls";

function App() {
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [volume, setVolume] = useState(50);
  const [currentPad, setCurrentPad] = useState(null);

  const handlePowerToggle = () => {
    setIsPowerOn(!isPowerOn);
  };

  const handleVolumeChange = (volume) => {
    setVolume(volume);
  };

  const handlePadClick = (pad) => {
    setCurrentPad(pad);
  };

  return (
    <div className="app">
      <PadBank
        isPowerOn={isPowerOn}
        volume={volume}
        onPadClick={handlePadClick}
      />
      <Controls
        onPowerToggle={handlePowerToggle}
        onVolumeChange={handleVolumeChange}
      />
      <div className="display">
        {currentPad ? currentPad.name : "Press a pad to start"}
      </div>
    </div>
  );
}

export default App;
