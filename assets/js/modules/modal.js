/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

import { body } from '../utils/index.js';

function initModals() {
  const openButtons = document.querySelectorAll('[data-modal-open]');
  const closeButtons = document.querySelectorAll('[data-modal-close]');

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modalOpen;
      const modal = document.getElementById(modalId);
      if (!modal) return;
      modal.classList.add('active');
      body.classList.add('show-modal');
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      modal.classList.remove('active');

      // hide overlay if no other modals are active
      if (document.querySelectorAll('.modal.active').length === 0) {
        body.classList.remove('show-modal');
      }
    });
  });
}

export { initModals };