const images = document.querySelectorAll(".non");
const backgroundDiv = document.getElementById("active");

images.forEach((image) => {
  image.addEventListener("click", function () {
    const imgSrc = this.getAttribute("src");
    backgroundDiv.style.backgroundImage = `url(${imgSrc})`;
  });
});
