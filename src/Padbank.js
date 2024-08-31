import React from "react";
import DrumPad from "./DrumPad";

function PadBank({ isPowerOn, volume, onPadClick }) {
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

  return (
    <div className="pad-bank">
      {pads.map((pad) => (
        <DrumPad
          key={pad.id}
          id={pad.id}
          name={pad.name}
          soundUrl={pad.soundUrl}
          onClick={() => onPadClick(pad)}
        />
      ))}
    </div>
  );
}

export default PadBank;
