  async function loadPosts() {
    try {
      
      const response = await fetch('/post/');
      const text = await response.text();
      

      const matches = [...text.matchAll(/href="([^"]+\.html)"/g)];
      const posts = matches
        .map(m => m[1])
        .filter(name => !window.location.pathname.includes(name));
      
      
      if (posts.length === 0) return;
      
      
      const shuffled = posts.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);
      
      const list = document.getElementById("suggestions-list");
      selected.forEach(file => {
        const title = file.replace(/\.html$/, "").replace(/[-_]/g, " ");
        const li = document.createElement("li");
        li.innerHTML = `<a href="/post/${file}">${title.charAt(0).toUpperCase() + title.slice(1)}</a>`;
        list.appendChild(li);
      });
    } catch (err) {
      console.error("No se pudo cargar la lista de posts:", err);
    }
  }
  
  loadPosts();
