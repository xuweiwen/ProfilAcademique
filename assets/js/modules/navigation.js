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

  const updateMenuState = () => {
    if (isMenuOpen) {
      navLinks.classList.remove('hidden');
      dropdownOverlay.style.maxHeight = navLinks.offsetHeight + 'px';
    } else {
      navLinks.classList.add('hidden');
      dropdownOverlay.style.maxHeight = '0';
    }
  };

  const updateNav = () => {
    const mastheadHeight = nav.offsetHeight + remInPx;
    dropdownOverlay.style.top = mastheadHeight + 'px';
    const availableLR = (nav.offsetWidth - linkOrgWidth) / 2 - 2 * remInPx;
    wideScreen = availableLR >= homeWidth && availableLR >= btnThemeWidth;

    if (wideScreen) {
      btnDropdown.classList.add('hidden');
      dropdownOverlay.classList.add('hidden');
      homeItem.classList.remove('hidden');
      navLinks.classList.remove('dropdown');
      navLinks.classList.remove('hidden');
    } else {
      btnDropdown.classList.remove('hidden');
      dropdownOverlay.classList.remove('hidden');
      homeItem.classList.add('hidden');
      navLinks.classList.add('dropdown');
      updateMenuState();
    }
  };

  const toggleMenu = () => {
    btnDropdown.classList.toggle('close');
    isMenuOpen = btnDropdown.classList.contains('close');
    updateMenuState();
  };

  const closeMenu = () => {
    if (isMenuOpen && !wideScreen) {
      navLinks.classList.add('hidden');
      btnDropdown.classList.remove('close');
      dropdownOverlay.style.maxHeight = '0';
      isMenuOpen = false;
    }
  };

  window.addEventListener('resize', updateNav);
  window.addEventListener('scroll', closeMenu);
  btnDropdown.addEventListener('click', toggleMenu);

  updateNav();
}

export { initResponsiveNav };