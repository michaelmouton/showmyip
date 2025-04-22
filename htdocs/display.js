(() => {
  let isTouching = false;
  let resumeTimeout;

  function setRealVh() {
    if (isTouching) return;
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // Set initial value
  setRealVh();

  // Update on resize (but only when not touching)
  const onResize = () => {
    setRealVh();
  };

  window.addEventListener('resize', onResize, { passive: true });

  // Pause updates on touch
  window.addEventListener('touchstart', () => {
    isTouching = true;
    if (resumeTimeout) {
      clearTimeout(resumeTimeout);
    }
  }, { passive: true });

  // Resume updates 500ms after touch ends
  window.addEventListener('touchend', () => {
    resumeTimeout = setTimeout(() => {
      isTouching = false;
      setRealVh(); // Refresh vh after delay
    }, 500);
  }, { passive: true });
})();
