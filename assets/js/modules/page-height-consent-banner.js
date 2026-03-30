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
  const remInPx = parseFloat(rootStyle.fontSize);
  const largeSize = parseFloat(rootStyle.getPropertyValue('--large'));
  const xLargeSize = parseFloat(rootStyle.getPropertyValue('--x-large'));
  let baseOffset = 0;
  let buttonExtraWidth = 0;
  if (backToTop) {
    const btnStyle = getComputedStyle(backToTop);
    const btnWidth = parseFloat(btnStyle.width);
    const btnRight = parseFloat(btnStyle.right);
    const btnBottom = parseFloat(btnStyle.bottom);
    baseOffset = btnBottom;
    buttonExtraWidth = btnWidth + btnRight + remInPx;
  }
  const bumpIt = () => {
    const windowInnerWidth = window.innerWidth;
    const windowClientWidth = document.documentElement.clientWidth;
    const widthThresholdWindow = windowInnerWidth <= xLargeSize? largeSize : xLargeSize;
    const widthThreshold = widthThresholdWindow + 2 * buttonExtraWidth;
    const isNarrow = windowInnerWidth <= widthThreshold;
    const isNarrower = windowClientWidth <= (widthThresholdWindow + 4 * remInPx);
    const bannerVisible = banner && getComputedStyle(banner).display !== 'none';
    if (bannerVisible) {
      const bannerHeight = banner.offsetHeight;
      document.body.style.marginBottom = (bannerHeight + 0.5 * remInPx) + 'px';
      if (backToTop) {
        backToTop.style.bottom = (isNarrow ? bannerHeight + remInPx : baseOffset) + 'px';
      }
    } else {
      document.body.style.marginBottom = '0';
      if (backToTop) backToTop.style.bottom = baseOffset + 'px';
    }
    if (backToTop) backToTop.style.right = isNarrower ? 0.025 * windowInnerWidth + 'px' : '2rem';
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