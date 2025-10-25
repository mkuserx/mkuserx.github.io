
  const targetNumber = 10;

  const countElement = document.getElementById('count');
  const circle = document.querySelector('.circle');

  function animateCounter() {
    let current = 0;
    const duration = 2000; 
    const interval = 10;
    const step = targetNumber / (duration / interval);


    circle.style.background = `conic-gradient(#ffd700 0deg, #333 0deg)`;
    countElement.textContent = "0";

    const counting = setInterval(() => {
      current += step;
      if (current >= targetNumber) {
        current = targetNumber;
        clearInterval(counting);
      }
      countElement.textContent = Math.floor(current);
      const angle = (current / targetNumber) * 360;
      circle.style.background = `conic-gradient(#4500FF ${angle}deg, #333 ${angle}deg)`;
    }, interval);
  }


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter();
      } else {
        
        countElement.textContent = "0";
        circle.style.background = `conic-gradient(#4500FF 0deg, #4500FF 0deg)`;
      }
    });
  }, { threshold: 0.6 }); // 0.6 = visible al 60%

  observer.observe(document.querySelector('.counter-section'));
