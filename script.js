const passionSpan = document.querySelector("#passion");
const form = document.querySelector("#form");
const email = document.querySelector("#email");

const typewriter = new Typewriter(passionSpan, {
  loop: true,
  delay: 100,
  deleteSpeed: 20,
});

typewriter
  .pauseFor(300)
  .typeString("I learn front-end development.")
  .pauseFor(1000)
  .deleteChars(30)
  .pauseFor(300)
  .typeString("I play drums.")
  .pauseFor(1000)
  .deleteChars(13)
  .pauseFor(300)
  .typeString("I make Neapolitan pizza.")
  .pauseFor(1000)
  .deleteChars(24)
  .pauseFor(300)
  .typeString("I do sports.")
  .pauseFor(1000)
  .deleteChars(12)
  .start();
