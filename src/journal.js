// import {
//   getFavorites,
//   updateFavoriteRating,
//   updateFavoriteReview,
// } from "./modules/storage.js";

// export const renderFavorites = () => {
//   const container = document.getElementById("favorites");
//   const favorites = getFavorites();

//   if (favorites.length === 0) {
//     const noFavorites = document.createElement("p");
//     noFavorites.textContent = "No favorite movies added yet!";
//     noFavorites.className = "text-center text-gray-500 mt-4";
//     container.appendChild(noFavorites);
//     return;
//   }

//   favorites.forEach((movie) => {
//     const wrapper = document.createElement("div");
//     wrapper.className =
//       "p-20 rounded-lg shadow-md mb-4 flex flex-col items-left bg-zinc-950";

//     const detailContainer = document.createElement("div");
//     detailContainer.className = "flex gap-8";
//     wrapper.appendChild(detailContainer);

//     const movieImg = document.createElement("img");
//     movieImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//     movieImg.alt = movie.title;
//     movieImg.className = "w-4/12 rounded-lg mb-4";
//     detailContainer.appendChild(movieImg);

//     const movieDescription = document.createElement("p");
//     movieDescription.textContent =
//       movie.overview || "No description available.";
//     movieDescription.className =
//       "text-lg w-1/2 text-gray-400 mb-4 text-left content-center justify-normal ";
//     detailContainer.appendChild(movieDescription);

//     const ratingContainer = document.createElement("div");
//     ratingContainer.className = "flex gap-1 mb-4";
//     wrapper.appendChild(ratingContainer);

//     for (let i = 1; i <= 5; i++) {
//       const star = document.createElement("span");
//       star.textContent = "★";
//       star.className =
//         "text-gray-400 cursor-pointer text-2xl transition-all hover:text-yellow-400";
//       star.dataset.value = i;

//       if (movie.rating && i <= movie.rating) {
//         star.classList.add("text-yellow-400");
//       }

//       star.addEventListener("click", () => {
//         movie.rating = i;
//         Array.from(ratingContainer.children).forEach((child, index) => {
//           child.classList.toggle("text-yellow-400", index < i);
//         });
//         updateFavoriteRating(movie.id, i);
//       });

//       ratingContainer.appendChild(star);
//     }

//     const reviewInput = document.createElement("textarea");
//     reviewInput.placeholder = "Write your review...";
//     reviewInput.className =
//       "w-4/12 p-3 border rounded mb-2 focus:outline-none text-sm";
//     reviewInput.value = movie.review || "";
//     wrapper.appendChild(reviewInput);

//     const submitButton = document.createElement("button");
//     submitButton.textContent = "Submit Review";
//     submitButton.className =
//       "bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 w-3/12";
//     wrapper.appendChild(submitButton);

//     submitButton.addEventListener("click", () => {
//       const review = reviewInput.value.trim();
//       if (review) {
//         updateFavoriteReview(movie.id, review);
//         alert("Review saved!");
//       } else {
//         alert("Please write a review before submitting.");
//       }
//     });

//     container.appendChild(wrapper);
//   });
// };

import { renderFavorites } from "./modules/ui";

document.addEventListener("DOMContentLoaded", () => {
  console.log("journal");
  renderFavorites();
});
