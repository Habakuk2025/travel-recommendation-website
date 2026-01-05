console.log("Travel Recommendation Website Loaded");

document.addEventListener("DOMContentLoaded", () => {
  const beachSection = document.querySelector("section:nth-of-type(1)");
  beachSection.addEventListener("click", () => {
    alert("You clicked on the Beach Destination section!");
  });
});
