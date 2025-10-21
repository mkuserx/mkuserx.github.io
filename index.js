    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const header = document.querySelector('header');
    
    // Toggle menú
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Dropdowns en móvil
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', e => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const parent = toggle.parentElement;
          parent.classList.toggle('active');
        }
      });
    });
    
    // Cambia header al hacer scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });
    
    
    
    
    
    
  
  // Número objetivo (puedes cambiar 168 por el valor que desees)
  const targetNumber = 10;

  const countElement = document.getElementById('count');
  const circle = document.querySelector('.circle');

  function animateCounter() {
    let current = 0;
    const duration = 2000; // Duración total (ms)
    const interval = 10;
    const step = targetNumber / (duration / interval);

    // Reinicia visualmente el círculo antes de cada animación
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

  // Detecta cuando el contador entra o sale de la vista
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter();
      } else {
        // Reinicia visualmente el círculo al salir
        countElement.textContent = "0";
        circle.style.background = `conic-gradient(#4500FF 0deg, #4500FF 0deg)`;
      }
    });
  }, { threshold: 0.6 }); // 0.6 = visible al 60%

  observer.observe(document.querySelector('.counter-section'));
