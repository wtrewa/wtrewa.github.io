import Typewriter from "typewriter-effect";
import React from "react";

export default function TypeWritter() {
  return (
    <Typewriter
      options={{
        strings: ["Programmer", "Quick Learner"],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}