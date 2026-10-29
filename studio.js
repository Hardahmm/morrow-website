'use strict';
(() => {
  const makeDots = (element, count, elapsed) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('span');
      dot.className = 'dot' + (i < elapsed ? ' past' : '') + (i === elapsed ? ' today' : '');
      dot.setAttribute('aria-hidden', 'true');
      fragment.append(dot);
    }
    element.replaceChildren(fragment);
  };
  document.querySelectorAll('.hero-dots').forEach(grid => makeDots(grid, 365, 148));
  const grid = document.querySelector('#preview-dots');
  if (!grid) return;
  let look = 'forest'; let period = 'year';
  const update = () => {
    document.querySelector('.calendar-preview').dataset.look = look;
    document.querySelector('#preview-heading').textContent = period === 'year' ? 'Your year in dots' : 'One month. More room.';
    grid.classList.toggle('month', period === 'month');
    makeDots(grid, period === 'year' ? 365 : 30, period === 'year' ? 148 : 12);
    document.querySelector('#preview-status').textContent = `${look[0].toUpperCase() + look.slice(1)} · ${period === 'year' ? 'Year' : 'Month'} view`;
  };
  ['look', 'period'].forEach(key => {
    document.querySelectorAll(`[data-${key}]`).forEach(button => {
      if (button.tagName !== 'BUTTON') return;
      button.addEventListener('click', () => {
        if (key === 'look') look = button.dataset.look; else period = button.dataset.period;
        document.querySelectorAll(`button[data-${key}]`).forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        update();
      });
    });
  });
  update();
})();
