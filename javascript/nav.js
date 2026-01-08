console.log('nav.js loaded');

const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');
const mq = window.matchMedia('(min-width: 860px)');

let lastFocused = null;

function getFocusable(container) {
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter(
    (el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
  );
}

function trapFocus(e) {
  if (!nav.classList.contains('is-open')) return;
  if (mq.matches) return; // desktop: ingen trap

  if (e.key !== 'Tab') return;

  const focusables = getFocusable(nav);
  if (focusables.length === 0) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  // Shift+Tab från första -> sista
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  }
  // Tab från sista -> första
  else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function setPageInert(isInert) {
  // Lås upp allt på desktop
  if (mq.matches) isInert = false;

  // Lås bara main + footer
  const content = document.querySelector('main');
  const footer = document.querySelector('footer');

  [content, footer].forEach((el) => {
    if (!el) return;
    if (isInert) {
      el.setAttribute('inert', '');
      el.setAttribute('aria-hidden', 'true');
    } else {
      el.removeAttribute('inert');
      el.removeAttribute('aria-hidden');
    }
  });
}

function openNav() {
  lastFocused = document.activeElement;

  nav.classList.add('is-open');
  document.body.classList.add('nav-open');
  btn?.setAttribute('aria-expanded', 'true');

  setNavInert(false); // gör länkarna tabb-bara
  setPageInert(true);

  const focusables = getFocusable(nav);
  (focusables[0] || nav).focus?.();
}

function closeNav({ restoreFocus = true } = {}) {
  nav.classList.remove('is-open');
  document.body.classList.remove('nav-open');
  btn?.setAttribute('aria-expanded', 'false');

  setPageInert(false);
  setNavInert(true);

  if (restoreFocus) {
    (lastFocused || btn)?.focus?.();
  }
}

btn?.addEventListener('click', () => {
  const isOpen = nav.classList.contains('is-open');
  if (isOpen) closeNav();
  else openNav();
});

function setNavInert(isInert) {
  if (!nav) return;

  if (mq.matches) isInert = false;

  if (isInert) {
    nav.setAttribute('inert', '');
    nav.setAttribute('aria-hidden', 'true');
  } else {
    nav.removeAttribute('inert');
    nav.removeAttribute('aria-hidden');
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('is-open')) {
    closeNav();
  }
});

// Submenu toggle (mobil)
document.querySelectorAll('.submenu-toggle').forEach((b) => {
  b.addEventListener('click', (e) => {
    // Bara på mobil
    if (mq.matches) return;

    e.preventDefault();
    e.stopPropagation();

    const li = b.closest('.has-submenu');
    if (!li) return;

    const isOpen = li.classList.toggle('is-subopen');
    b.setAttribute('aria-expanded', String(isOpen));
  });
});

document.addEventListener('keydown', trapFocus);

mq.addEventListener('change', (e) => {
  closeNav();
  setNavInert(!e.matches); // desktop: false, mobil: true
});

// initialt
closeNav({ restoreFocus: false });
setNavInert(!mq.matches);
