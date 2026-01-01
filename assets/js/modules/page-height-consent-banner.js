/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initPageHeightAdj() {
  const banner = document.getElementById('cookie-consent-banner');
  const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const bumpIt = () => {
    if (banner && banner.style.display !== 'none') {
      const bannerHeight = banner.offsetHeight;
      document.body.style.marginBottom = (bannerHeight + 0.3 * remInPx) + 'px';
    } else {
      document.body.style.marginBottom = '0';
    }
  };
  if (banner) {
    const observer = new MutationObserver(bumpIt);
    observer.observe(banner, { attributes: true, attributeFilter: ['style', 'class'] });
  }
  bumpIt();
  window.addEventListener('resize', bumpIt);
  window.addEventListener('orientationchange', bumpIt);
}

export { initPageHeightAdj };