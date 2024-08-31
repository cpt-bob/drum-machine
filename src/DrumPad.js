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
    <button
      id="drum-pad"
      className="drum-pad"
      onClick={playSound}
      disabled={!isPowerOn}
    >
      {id}
      <audio className="clip" ref={audioRef} src={soundUrl} id={id} />
    </button>
  );
}

export default DrumPad;
