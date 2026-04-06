/*!
 * Copyright (c) 2025-Present Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

const rootStyle = getComputedStyle(document.documentElement);
const remInPx = parseFloat(rootStyle.fontSize);
const body = document.body;

export { rootStyle, remInPx, body };