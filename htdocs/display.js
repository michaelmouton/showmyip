(() => {
  let isTouching = false;

  function setRealVh() {
    if (isTouching) return; // Don't update while touching
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // Set initial value
  setRealVh();

  // Update on resize
  window.addEventListener('resize', setRealVh, { passive: true });

  // Pause updates on touch
  window.addEventListener('touchstart', () => {
    isTouching = true;
  }, { passive: true });

  // Resume updates on touch release
  window.addEventListener('touchend', () => {
    isTouching = false;
    setRealVh(); // Update immediately after touch ends
  }, { passive: true });
})();
