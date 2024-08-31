import React from "react";

function Controls({ onPowerToggle, onVolumeChange }) {
  return (
    <div className="controls">
      <button className="control-button" onClick={onPowerToggle}>
        Power
      </button>
      <input
        type="range"
        min="0"
        max="100"
        onChange={(e) => onVolumeChange(e.target.value)}
        className="volume-slider"
      />
    </div>
  );
}

export default Controls;
