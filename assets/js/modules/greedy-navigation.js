/*!
 * This project is a derivative work of the jQuery plugin Greedy Navigation,
 * originally developed by Luke Jackson (https://github.com/lukejacksonn/GreedyNav).
 *
 * The present implementation has been rewritten entirely in native JavaScript,
 * following the logic and structure of the original version.
 *
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Modifications licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initResponsiveNav() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  const btntheme = nav.querySelector('#theme-toggle');
  const btn = nav.querySelector('#dropdown-menu');
  const vlinks = nav.querySelector('.visible-links');
  const hlinks = nav.querySelector('.hidden-links');
  if (!btntheme || !btn || !vlinks || !hlinks) return;

  let breaks = [];
  let isMenuOpen = false;

  // Utility functions for class handling
  const hasClass = (el, cls) => el.classList.contains(cls);
  const addClass = (el, cls) => el.classList.add(cls);
  const removeClass = (el, cls) => el.classList.remove(cls);
  const toggleClass = (el, cls) => el.classList.toggle(cls);

  const updateNav = () => {
    const btnHidden = hasClass(btn, 'hidden');
    const availableSpace = btnHidden
      ? nav.offsetWidth - btntheme.offsetWidth
      : nav.offsetWidth - btntheme.offsetWidth - btn.offsetWidth - 30;

    // Move items to hidden if overflowing
    while (vlinks.offsetWidth > availableSpace && vlinks.lastElementChild) {
      breaks.push(vlinks.offsetWidth);
      hlinks.insertBefore(vlinks.lastElementChild, hlinks.firstChild);
      removeClass(btn, 'hidden'); // show button if not enough space
    }

    // Move items back to visible if there's room
    while (
      breaks.length &&
      availableSpace > breaks[breaks.length - 1] &&
      hlinks.firstElementChild
    ) {
      vlinks.appendChild(hlinks.firstElementChild);
      breaks.pop();
    }

    // Hide dropdown button if no hidden items
    if (!breaks.length) {
      addClass(btn, 'hidden');
      addClass(hlinks, 'hidden');
    }

    btn.setAttribute('data-count', breaks.length);
  };

  const toggleMenu = () => {
    toggleClass(hlinks, 'hidden');
    toggleClass(btn, 'close');
    isMenuOpen = !hasClass(hlinks, 'hidden');
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      addClass(hlinks, 'hidden');
      removeClass(btn, 'close');
      isMenuOpen = false;
    }
  };

  // Event listeners
  window.addEventListener('resize', updateNav);
  window.addEventListener('scroll', closeMenu);
  btn.addEventListener('click', toggleMenu);

  // Initial run
  updateNav();
}

export { initResponsiveNav };