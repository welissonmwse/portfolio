import Typewriter from "typewriter-effect";

export function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developer",
          // "Deep Learning Engineer",
          // "MERN Stack Developer",
          // "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}