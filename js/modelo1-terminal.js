
// Cursor
const cursor = document.getElementById('cursor');
const trail = document.getElementById('trail');
let mx = 0, my = 0, tx = 0, ty = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function animate() {
  cursor.style.left = mx - 6 + 'px'; cursor.style.top = my - 6 + 'px';
  tx += (mx - tx) * 0.15; ty += (my - ty) * 0.15;
  trail.style.left = tx - 16 + 'px'; trail.style.top = ty - 16 + 'px';
  requestAnimationFrame(animate);
})();

// Typing effect
const words = ['HTML5', 'CSS3', 'JavaScript', 'Python', 'IA & Prompts'];
let wi = 0, ci = 0, deleting = false;
const el = document.getElementById('typing');
function type() {
  const w = words[wi];
  if (!deleting) {
    el.textContent = w.slice(0, ++ci);
    if (ci === w.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    el.textContent = w.slice(0, --ci);
    if (ci === 0) { deleting = false; wi = (wi+1)%words.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
