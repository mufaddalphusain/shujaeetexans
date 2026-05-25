// Navigation toggle
document.addEventListener('DOMContentLoaded',()=>{
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  if(toggle){
    toggle.addEventListener('click',()=>{
      nav.classList.toggle('open');
    });
  }

  // Lightbox for gallery
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbClose = document.getElementById('lightbox-close');
  document.querySelectorAll('.gallery-grid img').forEach(img=>{
    img.addEventListener('click',()=>{
      lbImg.src = img.dataset.full || img.src;
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden','false');
    });
  });
  if(lbClose){
    lbClose.addEventListener('click',()=>{ lightbox.style.display='none'; lightbox.setAttribute('aria-hidden','true'); });
  }
  lightbox.addEventListener('click',(e)=>{ if(e.target === lightbox) { lightbox.style.display='none'; lightbox.setAttribute('aria-hidden','true'); } });
});
