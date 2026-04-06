/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

const showNotice = (id, duration) => {
  const box = document.getElementById(id);
  box.classList.remove('hidden');
  setTimeout(() => {
    box.classList.add('hidden');
  }, duration);
};

function initShowNotice() {
  const links = document.querySelectorAll('.show-notice-link');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('data-target');
      const duration = parseInt(link.getAttribute('data-duration'), 10) || 5000;
      if (targetId) showNotice(targetId, duration);
    });
  });
}

export { initShowNotice };