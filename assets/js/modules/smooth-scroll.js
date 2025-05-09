/*!
 * This project is a derivative work of the jQuery plugin Smooth Scroll Plugin,
 * originally developed by Karl Swedberg (https://github.com/kswedberg/jquery-smooth-scroll).
 *
 * The present implementation has been rewritten entirely in native JavaScript,
 * following the logic and structure of the original version.
 *
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Modifications licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initSmoothScroll({ offset = 0, duration = 400 } = {}) {

  function getScrollTop(element) {
    const rect = element.getBoundingClientRect();
    return window.scrollY + rect.top + offset;
  }

  function smoothScrollTo(targetY, duration) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function animation(currentTime) {
      const time = Math.min(1, (currentTime - startTime) / duration);
      const easedTime = time < 0.5
        ? 2 * time * time
        : -1 + (4 - 2 * time) * time;

      window.scrollTo(0, startY + distance * easedTime);

      if (time < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");
      const url = new URL(href, window.location.href);
      const isSamePath = url.pathname === window.location.pathname;
      const isSameHost = url.hostname === window.location.hostname;
      const hasHash = url.hash.length > 1;
      if (isSamePath && isSameHost && hasHash) {
        const target = document.querySelector(url.hash);
        if (target) {
          e.preventDefault();
          const targetY = getScrollTop(target);
          smoothScrollTo(targetY, duration);
        }
      }
    });
  });
}

export { initSmoothScroll };