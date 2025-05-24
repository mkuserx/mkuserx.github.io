    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    function navegar(i) {
      slides[currentSlide].classList.remove('active');
      currentSlide = i;
      slides[currentSlide].classList.add('active');
    }
    function toggleMenu() {
      document.getElementById('menu').classList.toggle('open');
    }
    setInterval(() => {
      const typeText = document.querySelector('.typed');
      typeText.classList.remove('typed');
      void typeText.offsetWidth;
      typeText.classList.add('typed');
    }, 5000);
    
    
    const particles = document.querySelector('.particles::before');



document.addEventListener('mousemove', e => {
  const aura = document.getElementById('aura');
  aura.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

function iniciarTecleo(selector, intervalo = 100, repetirCada = 10000) {
  const elementos = document.querySelectorAll(selector);
  
  elementos.forEach(el => {
    const texto = el.getAttribute('data-text');
    let i = 0;
    
    function escribir() {
      el.textContent = '';
      i = 0;
      const intervaloTecleo = setInterval(() => {
        if (i < texto.length) {
          el.textContent += texto.charAt(i);
          i++;
        } else {
          clearInterval(intervaloTecleo);
        }
      }, intervalo);
    }
    
    escribir();
    if (repetirCada) {
      setInterval(() => escribir(), repetirCada);
    }
  });
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', () => {
  iniciarTecleo('.typewriter', 130, 7000); // cada 10 segundos
});
