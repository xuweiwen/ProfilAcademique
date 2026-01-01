/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

import { initCookieConsent, initPageHeightAdj, initAuthorInfo, initResponsiveNav, initThemeToggle, initExternalLinks, initCollapsibleSections, initModals, initVideoAspectRatio } from './modules/index.js';
import { initMoveFocusSkipLink, initShowNotice } from './utils/index.js';

document.addEventListener('DOMContentLoaded', () => {

  initCookieConsent();
  initPageHeightAdj();
  initMoveFocusSkipLink('skip-link-main-content');
  initAuthorInfo();
  initResponsiveNav();
  initThemeToggle();
  initExternalLinks();
  initCollapsibleSections({expandedLabel: '&rtrif; ', collapsedLabel: '&dtrif; '});
  initShowNotice();
  initModals();
  initVideoAspectRatio();

});