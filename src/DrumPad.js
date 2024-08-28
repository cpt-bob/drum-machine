import React from "react";

function DrumPad({ id, sound }) {
  const playSound = () => {
    const audio = new Audio(`sounds/${sound}`);
    audio.play();
  };

  return (
    <button className="drum-pad" onClick={playSound}>
      {id}
    </button>
  );
}

export default DrumPad;
