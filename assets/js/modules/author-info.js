/*!
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initAuthorInfo() {
  const authorUrls = document.querySelector('.author__urls');
  const stickySideBar = () => {
    const button = document.querySelector('.author__urls-wrapper button');
    const show = button === null ? window.innerWidth > 925 : !button.offsetParent;
    
    if (authorUrls) {
      authorUrls.style.display = show ? 'block' : 'none';
    }
  };
  
  stickySideBar();
  
  window.addEventListener('resize', stickySideBar);
  
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