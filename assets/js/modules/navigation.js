/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initResponsiveNav() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  const btnTheme = nav.querySelector('#theme-toggle');
  const btnDropdown = nav.querySelector('#dropdown-menu');
  const homeItem = nav.querySelector('.home-item');
  const navLinks = nav.querySelector('.nav-links');
  const dropdownOverlay = document.getElementById('dropdown-overlay');
  if (!btnTheme || !btnDropdown || !navLinks || !dropdownOverlay) return;
  const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);

  const measure = () => {
    return {
      linkOrgWidth: navLinks.offsetWidth,
      homeWidth: homeItem.offsetWidth,
      btnThemeWidth: btnTheme.offsetWidth
    };
  };

  const { linkOrgWidth, homeWidth, btnThemeWidth } = measure();

  let isMenuOpen = false;
  let wideScreen = true;

  const applyMenuState = () => {
    if (isMenuOpen && !wideScreen) {
      dropdownOverlay.style.maxHeight = navLinks.offsetHeight + 'px';
    }
    btnDropdown.classList.toggle('close', isMenuOpen);
    navLinks.classList.toggle('hidden', !isMenuOpen && !wideScreen);
    dropdownOverlay.classList.toggle('hidden', !(isMenuOpen && !wideScreen));
  };

  const updateNav = () => {
    const mastheadHeight = nav.offsetHeight + remInPx;
    dropdownOverlay.style.top = mastheadHeight + 'px';
    const availableLR = (nav.offsetWidth - linkOrgWidth) / 2 - 2 * remInPx;
    wideScreen = availableLR >= homeWidth && availableLR >= btnThemeWidth;
    if (wideScreen) {
      isMenuOpen = false;
    }
    btnDropdown.classList.toggle('hidden', wideScreen);
    homeItem.classList.toggle('hidden', !wideScreen);
    navLinks.classList.toggle('dropdown', !wideScreen);
    applyMenuState();
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    applyMenuState();
  };

  const closeMenu = () => {
    if (isMenuOpen && !wideScreen) {
      isMenuOpen = false;
      applyMenuState();
    }
  };

  window.addEventListener('resize', updateNav);
  window.addEventListener('scroll', closeMenu);
  btnDropdown.addEventListener('click', toggleMenu);

  updateNav();
}

export { initResponsiveNav };