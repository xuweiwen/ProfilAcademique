/*!
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initVideoAspectRatio() {
  document.querySelectorAll('figure iframe').forEach(iframe => {
    const w = iframe.width || 16;
    const h = iframe.height || 9;
    iframe.style.aspectRatio = `${w} / ${h}`;
  });
}

export { initVideoAspectRatio };