/*!
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

import { initPageHeightAdj, initAuthorInfo, initResponsiveNav, initSmoothScroll, initCollapsibleSections, initThemeToggle, adjInitScroll } from './modules/index.js';
import { initMoveFocusSkipLink, initShowNotice } from './utils/index.js';

const OFFSET = -20;

document.addEventListener("DOMContentLoaded", function() {

  initPageHeightAdj();
  initMoveFocusSkipLink('skip-link-main-content');
  initAuthorInfo();
  initResponsiveNav();
  initSmoothScroll({ offset: OFFSET, duration: 400 });
  initThemeToggle();
  initCollapsibleSections({expandedLabel: " - show", collapsedLabel: " - hide"});
  initShowNotice();
  
});

window.addEventListener('load', function() {
  adjInitScroll({ offset: OFFSET, delay: 300 });
});