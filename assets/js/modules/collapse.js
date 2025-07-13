/*!
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initCollapsibleSections({expandedLabel = ' - show', collapsedLabel = ' - hide'} = {}) {
  document.querySelectorAll('.header').forEach(header => {
    const content = header.nextElementSibling;

    content.style.maxHeight = '0';
    content.style.overflow = 'hidden';

    header.textContent = header.textContent + expandedLabel;

    header.addEventListener('click', () => {
      const isExpanded = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';

      if (isExpanded) {
        content.style.maxHeight = '0';
        header.textContent = header.textContent.replace(collapsedLabel, expandedLabel); // reset to expanded
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        header.textContent = header.textContent.replace(expandedLabel, collapsedLabel); // change to collapsed
      }
    });
  });
}

export { initCollapsibleSections };