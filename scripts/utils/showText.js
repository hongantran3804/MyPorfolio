const carouselTexts = document.querySelectorAll(".carousel-text");
function showText() {
  Array.from(carouselTexts).forEach((carouselText) => {
    const viewMore = carouselText.firstElementChild;
    const content = carouselText.lastElementChild;
    viewMore.addEventListener("mouseenter", () => {
      content.style.display = "flex";
      content.style.animation = "showText 0.5s forwards";
      viewMore.style.display = "none";
    });
    carouselText
      .addEventListener("mouseleave", () => {
        
        content.style.animation = "hideText 0.5s forwards";
        setTimeout(() => {
          content.style.display = "none";
        }, 500);
        viewMore.style.display = "flex";
      });
  });
}

showText();
