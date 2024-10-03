const easeInOutCubic = (t) => {
  return t < 0.5
    ? 4 * t * t * t // Accelerate in the first half
    : 1 - Math.pow(-2 * t + 2, 3) / 2; // Decelerate in the second half
};

const smoothScrollToTop = () => {
  const startY = window.scrollY;
  const duration = 1000; // Duration in milliseconds (1 second)
  let startTime = null;

  const scrollStep = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const timeElapsed = timestamp - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Ensure progress does not exceed 1

    const easeProgress = easeInOutCubic(progress); // Use the ease-in-out cubic function
    window.scrollTo(0, startY * (1 - easeProgress)); // Scroll based on easing

    if (timeElapsed < duration) {
      requestAnimationFrame(scrollStep); // Continue scrolling until duration ends
    }
  };

  requestAnimationFrame(scrollStep); // Start the animation
};
export default smoothScrollToTop;
