function addHTML() {
  var el, i, domEl, fileName, xmlHttp;

  /*Iterate all DOM*/
  el = document.getElementsByTagName("*");
  for (i = 0; i < el.length; i++) {
    domEl = el[i];

    /*find the element having w3-include-html attribute*/
    fileName = domEl.getAttribute("w3-include-html");
    if (fileName) {
      /*http request with attribute value as file name*/
      xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            domEl.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            domEl.innerHTML = "Page not found.";
          }

          /* Remove the attribute and invoke the function again*/
          domEl.removeAttribute("w3-include-html");
          addHTML();
        }
      };
      xmlHttp.open("GET", fileName, true);
      xmlHttp.send();

      /*function ends*/
      return;
    }
  }
}
addHTML();

// nav, scroll to the part

// let nav = document.querySelector("#nav-items");

// for (let i = 0; i < nav.length(); i++) {
//   nav[i].on("click", (e) => {});
// }

// Scrolling banner

document.addEventListener("DOMContentLoaded", function () {
  const scrollingBanner = document.getElementById("scrolling-banner");
  const bannerContent = scrollingBanner.innerHTML;

  // Dupliquer le contenu pour assurer le défilement continu
  scrollingBanner.innerHTML = bannerContent + bannerContent;
});
