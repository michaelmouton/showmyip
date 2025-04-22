(() => {
  let isTouching = false;
  let currentVh = window.innerHeight * 0.01;

  function setVh(vh) {
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  function animateVh(from, to, duration = 1000) {
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Exponential easing (easeOutExpo)
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

      const newVh = from + (to - from) * eased;
      setVh(newVh);

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        currentVh = to;
      }
    }

    requestAnimationFrame(step);
  }

  function updateVh() {
    if (isTouching) return;
    const newVh = window.innerHeight * 0.01;

    if (Math.abs(newVh - currentVh) > 0.1) {
      animateVh(currentVh, newVh);
    }
  }

  // Initial set
  setVh(currentVh);

  // Resize listener
  window.addEventListener('resize', updateVh, { passive: true });

  // Pause on touch
  window.addEventListener('touchstart', () => {
    isTouching = true;
  }, { passive: true });

  // Resume and refresh after touch ends
  window.addEventListener('touchend', () => {
    isTouching = false;
    updateVh(); // Ensure immediate refresh after touch ends
  }, { passive: true });
})();
