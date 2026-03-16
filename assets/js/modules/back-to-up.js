/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  function toggleButton() {
    btn.classList.toggle('hidden', window.scrollY <= 400);
  }
  window.addEventListener('scroll', toggleButton);
  toggleButton();
}

export { initBackToTop };