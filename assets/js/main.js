/*!
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

import { initPageHeightAdj, initAuthorInfo, initResponsiveNav, initCollapsibleSections, initThemeToggle } from './modules/index.js';
import { initMoveFocusSkipLink, initShowNotice } from './utils/index.js';

document.addEventListener('DOMContentLoaded', function() {

  initPageHeightAdj();
  initMoveFocusSkipLink('skip-link-main-content');
  initAuthorInfo();
  initResponsiveNav();
  initThemeToggle();
  initCollapsibleSections({expandedLabel: ' - show', collapsedLabel: ' - hide'});
  initShowNotice();
  
});