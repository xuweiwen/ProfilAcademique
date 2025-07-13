/*!
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initPageHeightAdj() {
  const banner = document.getElementById('cookie-consent-banner');
  var bumpIt = function() {
    if (banner && banner.style.display !== 'none') {
      var bannerHeight = banner.offsetHeight;
      document.body.style.marginBottom = bannerHeight + 'px';
    } else {
      document.body.style.marginBottom = '0';
    }
  };

  let didResize = false;
  // Handle resize events
  window.addEventListener('resize', function () {
    didResize = true;
  });
  // Polling to check for resize
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  if (banner) {
    const observer = new MutationObserver(bumpIt);
    observer.observe(banner, { attributes: true, attributeFilter: ['style', 'class'] });
  }
  bumpIt();
}

export { initPageHeightAdj };