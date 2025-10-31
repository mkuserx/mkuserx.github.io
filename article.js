  // Total de posts que tienes en la carpeta /post/
  const totalPosts = 12; // cambia este número según tus artículos
  const currentURL = window.location.pathname;

  // Generar lista automática
  const allPosts = [];
  for (let i = 1; i <= totalPosts; i++) {
    const url = `/post/post${i}.html`;
    // Evita mostrar el post actual
    if (!currentURL.includes(`post${i}.html`)) {
      allPosts.push({ title: `Post ${i}`, url });
    }
  }

  // Obtener 3 aleatorios
  function getRandomPosts(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  const selected = getRandomPosts(allPosts, 3);
  const list = document.getElementById("suggestions-list");

  selected.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${post.url}">${post.title}</a>`;
    list.appendChild(li);
  });
