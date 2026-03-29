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
  const rootStyle = getComputedStyle(document.documentElement);
  const remInPx = parseFloat(rootStyle.fontSize);

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

  const updateOverlayHeight = () => {
    dropdownOverlay.style.maxHeight = navLinks.offsetHeight + 'px';
  };

  const updateNav = () => {
    const mastheadHeight = nav.offsetHeight + remInPx;
    dropdownOverlay.style.top = mastheadHeight + 'px';
    const availableLR = (nav.offsetWidth - linkOrgWidth) / 2 - 2 * remInPx;
    wideScreen = availableLR >= homeWidth && availableLR >= btnThemeWidth;
    if (!wideScreen) {
      updateOverlayHeight();
    }
    btnDropdown.classList.toggle('hidden', wideScreen);
    homeItem.classList.toggle('hidden', !wideScreen);
    navLinks.classList.toggle('dropdown', !wideScreen);
    navLinks.classList.toggle('hidden', !(isMenuOpen && !wideScreen));
    dropdownOverlay.classList.toggle('inactive', !(isMenuOpen && !wideScreen));
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    btnDropdown.classList.toggle('close', isMenuOpen);
    navLinks.classList.toggle('hidden', !isMenuOpen);
    dropdownOverlay.classList.toggle('inactive', !isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen && !wideScreen) {
      isMenuOpen = !isMenuOpen;
      btnDropdown.classList.remove('close');
      navLinks.classList.add('hidden');
      dropdownOverlay.classList.add('inactive');
    }
  };

  window.addEventListener('resize', updateNav);
  window.addEventListener('scroll', closeMenu);
  btnDropdown.addEventListener('click', toggleMenu);

  updateNav();
}

export { initResponsiveNav };