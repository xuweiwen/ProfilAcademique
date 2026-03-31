/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

import { throttle } from '../utils/index.js';

function initAuthorInfo() {
  const authorUrls = document.querySelector('.author__urls');
  const largeSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--large'));
  const stickySideBar = () => {
    const button = document.querySelector('.author__urls-wrapper button');
    const show = button === null ? window.innerWidth > largeSize : !button.offsetParent;
    
    if (authorUrls) {
      authorUrls.style.display = show ? 'block' : 'none';
    }
  };
  
  stickySideBar();
  
  window.addEventListener('resize', throttle(stickySideBar, 50));
  
  const button = document.querySelector('.author__urls-wrapper button');
  if (button) {
    button.addEventListener('click', () => {
      if (authorUrls) {
        authorUrls.style.display = authorUrls.style.display === 'none' || authorUrls.style.display === '' ? 'block' : 'none';
      }
      button.classList.toggle('open');
    });
  }
}

export { initAuthorInfo };