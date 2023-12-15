import IntersectionObserver from "IntersectionObserver";

const images = document.querySelectorAll("img");

const options = {
  root: null,
  rootMargin: "-5px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute("data-src");
      img.setAttribute("src", src);
      observer.unobserve(img);
    }
  });
}, options);

images.forEach((img) => {
  observer.observe(img);
});
