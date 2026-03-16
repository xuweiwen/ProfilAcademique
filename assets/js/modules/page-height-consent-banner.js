/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initPageHeightAdj() {
  const banner = document.getElementById('cookie-consent-banner');
  const backToTop = document.getElementById('back-to-top');
  const rootStyle = getComputedStyle(document.documentElement);
  const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const xLarge = parseFloat(rootStyle.getPropertyValue('--x-large'));
  const baseOffset = 2 * remInPx;
  let buttonExtraWidth = 0;
  if (backToTop) {
    const btnStyle = getComputedStyle(backToTop);
    const btnWidth = parseFloat(btnStyle.width);
    const btnRight = parseFloat(btnStyle.right);
    buttonExtraWidth = btnWidth + btnRight + remInPx;
  }
  const bumpIt = () => {
    const windowWidth = window.innerWidth;
    const widthThreshold = xLarge + 2 * buttonExtraWidth;
    const isNarrow = windowWidth <= widthThreshold;
    const isNarrower = windowWidth <= xLarge;

    if (banner && banner.style.display !== 'none') {
      const bannerHeight = banner.offsetHeight;
      document.body.style.marginBottom = (bannerHeight + 0.3 * remInPx) + 'px';
      if (backToTop) {
        backToTop.style.bottom = (isNarrow ? bannerHeight + remInPx : baseOffset) + 'px';
      }
    } else {
      document.body.style.marginBottom = '0';
      if (backToTop) backToTop.style.bottom = baseOffset + 'px';
    }
    if (backToTop) backToTop.style.right = isNarrower ? 0.025 * windowWidth + 'px' : '2rem';
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