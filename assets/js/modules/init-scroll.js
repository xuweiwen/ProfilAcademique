/*!
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function adjInitScroll({ offset = 0, delay = 100 } = {}) {
  if (window.location.hash) {
    const element = document.querySelector(window.location.hash);
    if (element) {
      setTimeout(() => {
        const y = window.scrollY + element.getBoundingClientRect().top + offset;
        window.scrollTo({ top: y, behavior: 'auto' });
      }, delay); // small delay ensures it happens *after* default scroll
    }
  }
}

export { adjInitScroll };