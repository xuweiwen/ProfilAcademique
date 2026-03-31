/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initShowNotice() {
  const links = document.querySelectorAll('.show-notice-link');

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      
      const targetId = link.getAttribute('data-target');
      const duration = parseInt(link.getAttribute('data-duration'), 10) || 5000; // Default to 5000ms if not specified
      
      // Call showNotice with the specific ID
      if (targetId) showNotice(targetId, duration);  // Adjust the display style as needed
    });
  });
}

const showNotice = (id, duration) => {
  const box = document.getElementById(id);
  box.classList.remove('hidden');
  setTimeout(() => {
    box.classList.add('hidden');
  }, duration);
};

export { initShowNotice };