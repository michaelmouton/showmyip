window.addEventListener('load', () => {
  const isMobileAppleOrAndroid = /Android|iPhone/i.test(navigator.userAgent);
  if (isMobileAppleOrAndroid) {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
});
