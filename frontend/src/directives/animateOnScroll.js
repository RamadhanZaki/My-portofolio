const animatedScrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('enter');
    } else {
      entry.target.classList.remove('enter'); // agar bisa animasi ulang saat masuk lagi
    }
  });
});

export default {
  mounted(el) {
    el.classList.add('before-enter');
    animatedScrollObserver.observe(el);
  },
};
