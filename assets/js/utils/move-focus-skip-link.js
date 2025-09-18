/*!
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initMoveFocusSkipLink(linkId) {
  const link = document.getElementById(linkId);
  if (!link) return;
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href')?.substring(1);
    if (!targetId) return;
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    
    // Scroll and focus on the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
    targetElement.setAttribute('tabindex', '-1');
    targetElement.focus();
  });
}

export { initMoveFocusSkipLink };