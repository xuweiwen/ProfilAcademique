/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initCollapsibleSections({expandedLabel = '&rtrif; ', collapsedLabel = '&dtrif; '} = {}) {
  document.querySelectorAll('.header').forEach(header => {
    const content = header.nextElementSibling;
    if (!content) return;

    const originalText = header.textContent.trim();
    header.innerHTML = expandedLabel + originalText;

    content.dataset.expanded = 'false';

    header.addEventListener('click', () => {
      const isExpanded = content.dataset.expanded === 'true';

      content.dataset.expanded = (!isExpanded).toString();

      header.innerHTML = (isExpanded ? expandedLabel : collapsedLabel) + originalText;
      content.style.maxHeight = isExpanded
        ? '0px'
        : content.scrollHeight + 'px';
    });
  });
}

export { initCollapsibleSections };