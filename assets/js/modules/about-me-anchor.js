/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

import { rootStyle, remInPx, throttle } from '../utils/index.js';

function initAboutMeAnchor() {
  const anchor = document.getElementById('about-me');
  const largeSize = parseFloat(rootStyle.getPropertyValue('--large'));
  const sidebar = document.querySelector('.sidebar');
  const orgMarginTop = parseFloat(getComputedStyle(sidebar).marginTop);

  const adjMarginTop = () => {
    const windowInnerWidth = window.innerWidth;
    const adjRequired = windowInnerWidth < largeSize;
    if (adjRequired) {
      const sidebarHeight = sidebar.offsetHeight;
      const marginTop = orgMarginTop - sidebarHeight - remInPx;
      anchor.style.setProperty('margin-top', marginTop + 'px', 'important');
    } else {
      anchor.style.setProperty('margin-top', orgMarginTop + 'px', 'important');
    }
  }

  adjMarginTop();
  window.addEventListener('resize', throttle(adjMarginTop, 50));
}

export { initAboutMeAnchor };