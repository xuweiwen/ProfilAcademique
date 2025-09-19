/*!
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initCookieConsent() {
  const GA_ID = document.querySelector('meta[name="google-analytics-id"]').content;
  const banner = document.getElementById('cookie-consent-banner');
  const acceptBtn = document.getElementById('cookie-consent-accept');
  const declineBtn = document.getElementById('cookie-consent-decline');
  if (!GA_ID || !banner) return;

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {analytics_storage: 'denied'});

  const loadGA = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
    gtag('js', new Date());
    gtag('config', GA_ID);
  };

  const setConsent = (choice, reset = true) => {
    if (reset) {localStorage.setItem('cookie-consent', choice);}
    banner.style.display = 'none';
    gtag('consent', 'update', {
      analytics_storage: choice === 'accepted' ? 'granted' : 'denied'
    });
    if (choice === 'accepted') loadGA();
  };
  
  acceptBtn?.addEventListener('click', () => setConsent('accepted'));
  declineBtn?.addEventListener('click', () => setConsent('declined'));
  
  const saved = localStorage.getItem('cookie-consent');
  if (saved) {
    setConsent(saved, false);
  } else {
    banner.style.display = 'block';
  }
}

export { initCookieConsent };