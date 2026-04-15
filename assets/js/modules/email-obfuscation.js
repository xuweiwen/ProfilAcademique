/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initEmailObfuscation() {
  const link = document.getElementById("email-link");
  const email = link.dataset.email;
  if (!link || !email) return;
  const [user, domain] = email.split("@");
  link.href = `mailto:${email}`;
  const text = document.getElementById("email-text");
  if (text) {
    text.textContent = `${user} [at] ${domain}`;
  }
}

export { initEmailObfuscation };