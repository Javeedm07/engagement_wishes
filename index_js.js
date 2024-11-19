window.onload = () => {
  const confettiElement = document.getElementById("confetti-canvas");
  const confettiSettings = {
    target: confettiElement,
    max: 729,
    size: 1,
    animate: true,
    props: ["circle", "square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126],
    ],
    clock: 25,
    rotate: true,
    start_from_edge: true,
    respawn: true,
  };

  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
};
