/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

import { rootStyle } from '../utils/index.js';

function initAboutMeAnchor() {
  const anchor = document.getElementById('about-me');
  const largeSize = parseFloat(rootStyle.getPropertyValue('--large'));
  const sidebar = document.querySelector('.sidebar');
  const orgMarginTop = parseFloat(getComputedStyle(anchor).marginTop);
  const sidebarMarginBottom = parseFloat(getComputedStyle(sidebar).marginBottom);

  const adjMarginTop = () => {
    const windowInnerWidth = window.innerWidth;
    const adjRequired = windowInnerWidth < largeSize;
    if (adjRequired) {
      const sidebarHeight = sidebar.offsetHeight;
      const marginTop = orgMarginTop - sidebarHeight - sidebarMarginBottom;
      anchor.style.setProperty('margin-top', marginTop + 'px', 'important');
    } else {
      anchor.style.setProperty('margin-top', orgMarginTop + 'px', 'important');
    }
  }

  adjMarginTop();
  const observer = new ResizeObserver(adjMarginTop);
  observer.observe(sidebar);
}

export { initAboutMeAnchor };