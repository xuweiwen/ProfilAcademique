/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

import { throttle } from '../utils/index.js';

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  function toggleButton() {
    btn.classList.toggle('hidden', window.scrollY <= 400);
  }
  window.addEventListener('scroll', throttle(toggleButton, 50));
  toggleButton();
}

export { initBackToTop };