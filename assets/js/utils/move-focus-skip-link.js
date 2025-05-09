/*!
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initMoveFocusSkipLink(linkId) {
  document.getElementById(linkId).addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    // Scroll and focus on the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
    targetElement.setAttribute('tabindex', '-1');
    targetElement.focus();
  });
}

export { initMoveFocusSkipLink };