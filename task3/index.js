document.addEventListener('DOMContentLoaded', () => {
  
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.nav-prev');
  const nextBtn = document.querySelector('.nav-next');
  const pauseBtn = document.getElementById('pauseBtn');

  let current = 0;
  let autoPlay = true;
  let intervalId;
  const total = slides.length;

  function showSlide(n) {
    current = (n + total) % total; 
    slidesContainer.style.transform = `translateX(-${current * 100}%)`;
  }
  function next() { showSlide(current + 1); }
  function prev() { showSlide(current - 1); }

  function startAuto() {
    stopAuto();
    intervalId = setInterval(next, 3000);
    autoPlay = true;
    pauseBtn.textContent = 'Pause Auto';
  }
  function stopAuto() {
    clearInterval(intervalId);
    autoPlay = false;
    pauseBtn.textContent = 'Resume Auto';
  }

  nextBtn.addEventListener('click', () => { next(); stopAuto(); });
  prevBtn.addEventListener('click', () => { prev(); stopAuto(); });
  pauseBtn.addEventListener('click', () => {
    if (autoPlay) stopAuto();
    else startAuto();
  });

  showSlide(0);
  startAuto();

  
  const fetchBtn = document.getElementById('fetchBtn');
  const output = document.getElementById('apiOutput');

  async function fetchJoke() {
    output.textContent = 'Loading...';
    try {
      const res = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await res.json();
      output.innerHTML = `<strong>${data.setup}</strong><br>${data.punchline}`;
    } catch (error) {
      output.textContent = 'Error fetching joke.';
    }
  }

  fetchBtn.addEventListener('click', fetchJoke);
});
