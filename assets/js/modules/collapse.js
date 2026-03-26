/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initCollapsibleSections({expandLabel = '&rtrif; ', collapseLabel = '&dtrif; '} = {}) {
  const sections = [];
  document.querySelectorAll('.header').forEach(header => {
    const content = header.nextElementSibling;
    if (!content) return;
    sections.push({ content });

    const originalText = header.textContent.trim();
    header.innerHTML = expandLabel + originalText;

    header.addEventListener('click', () => {
      content.classList.toggle('expanded');
      const isExpanded = content.classList.contains('expanded');

      header.innerHTML = (isExpanded ? collapseLabel : expandLabel) + originalText;
      content.style.maxHeight = isExpanded
        ? content.scrollHeight + 'px'
        : '0px';
    });
  });

  window.addEventListener('resize', () => {
    sections.forEach(({ content }) => {
      if (content.classList.contains('expanded')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

export { initCollapsibleSections };