// Copy buttons
document.querySelectorAll('.copy').forEach(btn => {
  btn.addEventListener('click', async () => {
    const txt = btn.getAttribute('data-for');
    try {
      await navigator.clipboard.writeText(txt);
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = 'Copy', 1200);
    } catch (e) {
      console.error('Copy failed', e);
    }
  });
});

// Search
const search = document.getElementById('search');
const cards = Array.from(document.querySelectorAll('.card'));
search.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase();
  cards.forEach(card => {
    const text = (card.innerText + ' ' + (card.getAttribute('data-tags') || '')).toLowerCase();
    card.style.display = text.includes(q) ? '' : 'none';
  });
});

// Expand/collapse demo effects
document.getElementById('expandAll').addEventListener('click', () => {
  cards.forEach(c => c.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6)');
  setTimeout(() => cards.forEach(c => c.style.boxShadow = ''), 800);
});
document.getElementById('collapseAll').addEventListener('click', () => {
  cards.forEach(c => c.style.opacity = '0.5');
  setTimeout(() => cards.forEach(c => c.style.opacity = '1'), 300);
});

// Print
document.getElementById('print').addEventListener('click', () => window.print());

// Keyboard shortcut
window.addEventListener('keydown', e => {
  if (e.key === '/') {
    e.preventDefault();
    search.focus();
  }
});


