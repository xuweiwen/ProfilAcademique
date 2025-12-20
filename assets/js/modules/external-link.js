/*!
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initExternalLinks() {
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.startsWith(location.origin)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
}

export { initExternalLinks };