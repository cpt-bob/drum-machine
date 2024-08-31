import React, { useRef, useEffect } from "react";

function DrumPad({ id, soundUrl, name, isPowerOn, volume, onClick }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const playSound = () => {
    if (audioRef.current && isPowerOn) {
      audioRef.current.play().catch((error) => {
        console.error(`Error playing audio: ${error}`);
      });
      if (onClick) onClick();
    }
  };

  return (
    <button className="drum-pad" onClick={playSound} disabled={!isPowerOn}>
      {id}
      <audio ref={audioRef} src={soundUrl} />
    </button>
  );
}

export default DrumPad;
