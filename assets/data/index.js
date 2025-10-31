/*
 copyright mkuserx.pages.dev
 distribution prohibited
 Under license - and applicable laws
*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, push, set, onValue, remove, update } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

const quill = new Quill('#editor', { theme: 'snow' });


function showPanel(){ layer2.style.display="none"; adminPanel.style.display="flex"; loadPosts(); }
function hidePanel(){ adminPanel.style.display="none"; layer2.style.display="flex"; }

if(localStorage.getItem("verified_admin")==="true") showPanel(); else hidePanel();

verifyBtn.addEventListener("click",()=>{
  const inputKey = document.getElementById("secondKey").value.trim();
  const layerMsg = document.getElementById("layerMsg");
  if(inputKey===SECOND_KEY){
    localStorage.setItem("verified_admin","true");
    showPanel();
  } else { layerMsg.textContent="❌ Clave incorrecta"; }
});

logoutBtn.addEventListener("click",()=>{
  localStorage.removeItem("verified_admin");
  hidePanel();
});

async function uploadImage(file) {
  const storageRef = sRef(storage, 'posts/'+file.name);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}

async function publishPost(keyToUpdate=null){
  const title = document.getElementById("postTitle").value.trim();
  const content = quill.root.innerHTML.trim();
  const fileInput = document.getElementById("postFile");
  const category = document.getElementById("postCategory").value.trim();

  if(!title || !content){ msg.style.color="red"; msg.textContent="Título y contenido obligatorios."; return; }

  let imageUrl = "";
  if(fileInput.files.length>0){
    imageUrl = await uploadImage(fileInput.files[0]);
  }


  try{
    if(keyToUpdate){
      await update(ref(db,"post/"+keyToUpdate),{
        title, content, image: imageUrl||null, category: category||"General", date: new Date().toISOString()
      });
      msg.style.color="green"; msg.textContent="✅ Entrada actualizada correctamente.";
    } else {
      const postRef = push(ref(db,"post"));
      await set(postRef,{ title, content, image: imageUrl||null, category: category||"General", date: new Date().toISOString() });
      msg.style.color="green"; msg.textContent="✅ Entrada publicada correctamente.";
    }
    document.getElementById("postTitle").value="";
    quill.root.innerHTML="";
    fileInput.value="";
    document.getElementById("postCategory").value="";
    document.getElementById("publishBtn").onclick = ()=>publishPost();
  }catch(error){
    msg.style.color="red"; msg.textContent="❌ Error: "+error.message;
  }
}

document.getElementById("publishBtn").onclick = ()=>publishPost();

const postsContainer = document.getElementById("postsContainer");
function loadPosts(){
  const postsRef = ref(db,"post");
  onValue(postsRef, (snapshot)=>{
    postsContainer.innerHTML="";
    const data = snapshot.val();
    if(!data){ postsContainer.innerHTML="<p>No hay entradas.</p>"; return; }
    Object.keys(data).forEach(key=>{
      const post = data[key];
      const div = document.createElement("div");
      div.classList.add("post-item");
      div.innerHTML = `
        <strong>${post.title}</strong> <em>(${post.category})</em>
        <div>${post.content}</div>
        ${post.image ? `<img src="${post.image}" style="max-width:100%;margin-top:5px;" />` : ""}
        <div class="post-actions">
          <button onclick="editPost('${key}')">Editar</button>
          <button onclick="deletePost('${key}')">Eliminar</button>
        </div>
      `;
      postsContainer.appendChild(div);
    });
  });
}

window.editPost = (key)=>{
  const postsRef = ref(db,"post/"+key);
  onValue(postsRef,(snapshot)=>{
    const post = snapshot.val();
    document.getElementById("postTitle").value = post.title;
    quill.root.innerHTML = post.content;
    document.getElementById("postCategory").value = post.category||"General";
    document.getElementById("publishBtn").onclick = ()=>publishPost(key);
  }, {once:true});
};

// Eliminar post
window.deletePost = async (key)=>{
  if(confirm("¿Deseas eliminar esta entrada?")){
    try{ await remove(ref(db,"post/"+key)); }
    catch(error){ alert("Error al eliminar: "+error.message); }
  }
};

function checkCSS() {
  const el = document.getElementById("styleDetector");
  const before = window.getComputedStyle(el, "::before").getPropertyValue("content");
  const after = window.getComputedStyle(el, "::after").getPropertyValue("content");
  
  const ok1 = before.includes("sys_314alpha");
  const ok2 = after.includes("verify_907zeta");
  
  if (!(ok1 && ok2)) {
    document.getElementById("noStyleWarning").style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    document.getElementById("noStyleWarning").style.display = "none";
    document.body.style.overflow = "auto";
  }
}

document.addEventListener("DOMContentLoaded", checkCSS);
document.getElementById("retryBtn").addEventListener("click", checkCSS);
