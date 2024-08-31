import React, { useRef } from "react";

function DrumPad({ id, soundUrl, name, onClick }) {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error(`Error playing audio: ${error}`);
      });
      if (onClick) onClick();
    }
  };

  return (
    <button className="drum-pad" onClick={playSound}>
      {id}
      <audio ref={audioRef} src={soundUrl} />
    </button>
  );
}

export default DrumPad;
