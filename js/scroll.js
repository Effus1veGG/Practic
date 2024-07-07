document.addEventListener("DOMContentLoaded", () => {
  const scrollContents = document.querySelectorAll(".scroll-content");
  scrollContents.forEach((scrollContent) => {
    const reviews = scrollContent.querySelectorAll(".review");
    reviews.forEach((review) => {
      const clone = review.cloneNode(true);
      scrollContent.appendChild(clone);
    });
  });
});
