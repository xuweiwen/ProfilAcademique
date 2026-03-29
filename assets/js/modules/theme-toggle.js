/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initThemeToggle() {

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  const themeToggle = document.getElementById('theme-toggle');
  if (!metaThemeColor || !themeToggle) return;

  const setTheme = (theme) => {
    const isLight = theme === 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    metaThemeColor.setAttribute('content', isLight ? '#ffffff' : '#000000');
  };
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
  
  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
}

export { initThemeToggle };