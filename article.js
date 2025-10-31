async function loadSuggestions() {
  try {
    const res = await fetch('/post/posts.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const posts = await res.json();

    const current = window.location.pathname;
    const filtered = posts.filter(p => !current.endsWith(p.url));

    // Mezclar aleatoriamente
    const shuffled = structuredClone(filtered).sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    const list = document.getElementById('suggestions-list');
    list.innerHTML = selected.map(p => 
      `<li><a href="${p.url}" title="${p.title}">${p.title}</a></li>`
    ).join('');
  } catch (err) {
    console.error('No se pudieron cargar las sugerencias:', err);
  }
}

loadSuggestions();
