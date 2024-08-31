import React, { useState } from "react";
import "./App.css";
import PadBank from "./Padbank";
import Display from "./Display";
import Controls from "./Controls";

function App() {
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [volume, setVolume] = useState(50);

  const handlePowerToggle = () => {
    setIsPowerOn(!isPowerOn);
  };

  const handleVolumeChange = (volume) => {
    setVolume(volume);
  };

  return (
    <div className="app">
      <Display />
      <PadBank isPowerOn={isPowerOn} volume={volume} />
      <Controls
        onPowerToggle={handlePowerToggle}
        onVolumeChange={handleVolumeChange}
      />
    </div>
  );
}

export default App;
