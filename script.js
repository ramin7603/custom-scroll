let scrollElem = document.querySelector(".scroll");

window.addEventListener("scroll", function () {
  let scrollSizePage = document.body.clientHeight;

  let scrollHight = window.scrollY;

  let documentHeight = window.innerHeight;

  let calcSizePage = (scrollHight / (scrollSizePage - documentHeight)) * 100;

  scrollElem.style.width = calcSizePage + "%";
});
