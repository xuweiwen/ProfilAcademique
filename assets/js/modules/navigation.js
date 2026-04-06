/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

import { throttle } from '../utils/index.js';

function initResponsiveNav() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  const btnTheme = nav.querySelector('#theme-toggle');
  const btnDropdown = nav.querySelector('#dropdown-menu');
  const homeItem = nav.querySelector('.home-item');
  const navLinks = nav.querySelector('.nav-links');
  if (!btnTheme || !btnDropdown || !navLinks) return;
  const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);

  const measure = () => {
    return {
      navOrgHeight: nav.offsetHeight,
      linkOrgWidth: navLinks.offsetWidth,
      homeWidth: homeItem.offsetWidth,
      btnThemeWidth: btnTheme.offsetWidth
    };
  };

  const { navOrgHeight, linkOrgWidth, homeWidth, btnThemeWidth } = measure();
  const navCount = parseInt(navLinks.dataset.count, 10);
  const navExpandHeight = navOrgHeight + (navCount * 2.5 + 0.5) * remInPx;

  let isMenuOpen = false;
  let wideScreen = true;

  const applyMenuState = () => {
    const isDropdownVisible = isMenuOpen && !wideScreen;
    btnDropdown.classList.toggle('close', isMenuOpen);
    navLinks.classList.toggle('hidden', !isMenuOpen && !wideScreen);
    if (isDropdownVisible) {
      nav.style.height = navExpandHeight + 'px';
    } else {
      nav.style.height = navOrgHeight + 'px';
    }
  };

  const updateNav = () => {
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

  window.addEventListener('resize', throttle(updateNav, 50));
  window.addEventListener('scroll', throttle(closeMenu, 50));
  btnDropdown.addEventListener('click', toggleMenu);
  navLinks.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
      closeMenu();
    }
  });

  updateNav();
}

export { initResponsiveNav };