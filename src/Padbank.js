import React from "react";
import DrumPad from "./DrumPad";

function PadBank() {
  const pads = [
    {
      id: "Q",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    },
    {
      id: "W",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    },
    {
      id: "E",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    },
    {
      id: "A",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    },
    {
      id: "S",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    },
    {
      id: "D",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    },
    {
      id: "Z",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    },
    {
      id: "X",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    },
    {
      id: "C",
      soundUrl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    },
  ];

  return (
    <div className="pad-bank">
      {pads.map((pad) => (
        <DrumPad key={pad.id} id={pad.id} soundUrl={pad.soundUrl} />
      ))}
    </div>
  );
}

export default PadBank;
