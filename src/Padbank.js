import React, { useState, useEffect } from "react";
import DrumPad from "./DrumPad";

function PadBank({ isPowerOn, volume, onPadClick }) {
  const [currentPad, setCurrentPad] = useState(null);

  const pads = [
    {
      id: "Q",
      name: "Heater 1",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    },
    {
      id: "W",
      name: "Heater 2",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    },
    {
      id: "E",
      name: "Heater 3",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    },
    {
      id: "A",
      name: "Heater 4",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    },
    {
      id: "S",
      name: "Clap",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    },
    {
      id: "D",
      name: "Open-HH",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    },
    {
      id: "Z",
      name: "Kick-n'-Hat",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    },
    {
      id: "X",
      name: "Kick",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    },
    {
      id: "C",
      name: "Closed-HH",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    },
  ];

  const padMap = pads.reduce((map, pad) => {
    map[pad.id] = document.getElementById(pad.id);
    return map;
  }, {});

  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    if (isPowerOn && padMap[key]) {
      const audio = padMap[key];
      audio.currentTime = 0; // Reset audio to start
      audio.volume = volume / 100;
      audio.play().catch((error) => {
        console.error(`Error playing audio: ${error}`);
      });
      setCurrentPad(pads.find((pad) => pad.id === key));
      onPadClick(pads.find((pad) => pad.id === key));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPowerOn, volume]);

  return (
    <div className="pad-bank">
      {pads.map((pad) => (
        <DrumPad
          key={pad.id}
          id={pad.id}
          name={pad.name}
          soundUrl={pad.soundUrl}
          isPowerOn={isPowerOn}
          volume={volume}
          onClick={() => onPadClick(pad)}
        />
      ))}
    </div>
  );
}

export default PadBank;
