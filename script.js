document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".animate-logo");
  const textElements = document.querySelectorAll(".animate-text");
  const buttonElements = document.querySelectorAll(".button");

  // Animate the logo first
  setTimeout(() => {
    logo.classList.add("animate");
  }, 500);

  // Animate text elements
  textElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("animate");
    }, (index + 1) * 500);
  });
  console.log(textElements.length);
  // Animate button elements after the last text element is animated
  buttonElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("animate-button");
    }, 1500);
  });
});
