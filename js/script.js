document.addEventListener("DOMContentLoaded", function () {
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

  // function updateCarousel() {
  //   const itemWidth = document.querySelector(".carousel-item").offsetWidth;
  //   const newTransformValue = -currentIndex * itemWidth + "px";
  //   console.log(itemWidth);
  //   console.log(newTransformValue);
  //   document.querySelector(".carousel-content").style.transform =
  //     "translateX(" + newTransformValue + ")";
  // }
});

// Carousel

let currentIndex = 0;
const slides = document.getElementsByClassName("carousel-item");
slides[1].classList.add("hidden");
// slides[2].classList.add("hidden");
const totalSlides = slides.length;

function nextSlide() {
  slides[currentIndex].classList.add("hidden");
  console.log("next" + currentIndex);
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    slides[currentIndex].classList.remove("hidden");
    slides[currentIndex].classList.remove("grid");
  } else {
    currentIndex = 0;
    slides[currentIndex].classList.remove("hidden");
    slides[currentIndex].classList.remove("grid");
  }
  slides[currentIndex].classList.add("grid");
  // updateCarousel();
}

function prevSlide() {
  slides[currentIndex].classList.add("hidden");
  if (currentIndex > 0) {
    currentIndex--;
    slides[currentIndex].classList.remove("hidden");
    slides[currentIndex].classList.remove("grid");
  } else {
    currentIndex = totalSlides - 1;
    slides[currentIndex].classList.remove("hidden");
    slides[currentIndex].classList.remove("grid");
  }
  slides[currentIndex].classList.add("grid");
  // updateCarousel();
}
