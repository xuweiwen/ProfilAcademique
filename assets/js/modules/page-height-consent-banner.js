/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

import { rootStyle, remInPx, body, throttle } from '../utils/index.js';

function initPageHeightAdj() {
  const banner = document.getElementById('cookie-consent-banner');
  const backToTop = document.getElementById('back-to-top');
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
    buttonExtraWidth = btnWidth + btnRight;
  }
  const bumpIt = () => {
    const windowInnerWidth = window.innerWidth;
    const widthThresholdWindow = windowInnerWidth < xLargeSize? largeSize : xLargeSize;
    const isNarrow = windowInnerWidth <= widthThresholdWindow + 2 * buttonExtraWidth;
    const bannerVisible = banner && getComputedStyle(banner).display !== 'none';
    if (bannerVisible) {
      const bannerHeight = banner.offsetHeight;
      body.style.marginBottom = (bannerHeight + 0.5 * remInPx) + 'px';
      if (backToTop) {
        backToTop.style.bottom = (isNarrow ? bannerHeight + remInPx : baseOffset) + 'px';
      }
    } else {
      body.style.marginBottom = '0';
      if (backToTop) backToTop.style.bottom = baseOffset + 'px';
    }
  };
  if (banner) {
    const observer = new MutationObserver(bumpIt);
    observer.observe(banner, { attributes: true, attributeFilter: ['style', 'class'] });
  }
  bumpIt();
  window.addEventListener('resize', throttle(bumpIt, 50));
  window.addEventListener('orientationchange', throttle(bumpIt, 50));
}

export { initPageHeightAdj };