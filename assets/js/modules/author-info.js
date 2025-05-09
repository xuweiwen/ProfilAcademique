/*!
 * Copyright (c) 2025 Wei Xu
 * ProfilAcademique: https://github.com/xuweiwen/ProfilAcademique
 * Licensed under the MIT License.
 * See LICENSE file for full license text.
 */

function initAuthorInfo() {
  var stickySideBar = function() {
    var button = document.querySelector(".author__urls-wrapper button");
    var show = button === null ? window.innerWidth > 925 : !button.offsetParent;
    
    if (show) {
      document.querySelector(".author__urls").style.display = "block";
    } else {
      document.querySelector(".author__urls").style.display = "none";
    }
  };
    
  stickySideBar();
    
  window.addEventListener("resize", function() {
    stickySideBar();
  });
    
  // Follow menu drop down
  var button = document.querySelector(".author__urls-wrapper button");
  if (button) {
    button.addEventListener("click", function() {
      var authorUrls = document.querySelector(".author__urls");
      if (authorUrls) {
        authorUrls.style.display = authorUrls.style.display === "none" || authorUrls.style.display === "" ? "block" : "none";
      }
      button.classList.toggle("open");
    });
  }
}

export { initAuthorInfo };