import { addToStorage, deleteFromStorage } from "./storage.js";

export const renderMovie = (movie) => {
  const section = document.getElementById("cards");

  const wrapper = document.createElement("div");
  wrapper.className = "relative inline-block w-64 h-auto m-4";

  const movieImg = document.createElement("img");
  movieImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  movieImg.className = "w-full rounded-lg shadow-md";

  const info = document.createElement("div");
  info.className =
    "absolute bottom-0 from-white container px-4 py-2 bg-gray-500 bg-opacity-80";

  const heartSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" class="absolute top-2 right-2 w-6 h-6 cursor-pointer">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.998 20.663l-.13-.121c-4.055-3.765-6.75-6.274-6.75-8.97a4.5 4.5 0 018.648-1.88 4.5 4.5 0 018.652 1.88c0 2.696-2.695 5.205-6.75 8.97l-.13.12a.75.75 0 01-1.06 0z" />
    </svg>
  `;

  const heartDiv = document.createElement("div");
  heartDiv.className = "absolute top-2 right-2";
  heartDiv.innerHTML = heartSvg;

  const svg = heartDiv.querySelector("svg");

  const movieTitle = document.createElement("h2");
  movieTitle.className = "text-white text-xl";
  movieTitle.textContent = movie.title;

  const movieDate = document.createElement("p");
  movieDate.className = "text-white text-xl";
  movieDate.textContent = movie.release_date;

  const movieLang = document.createElement("p");
  movieLang.className =
    "text-white text-xl bg-gray-500 bg-opacity-50 px-1 py-1 w-fit rounded-[5px]";
  movieLang.textContent = movie.original_language;

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  // console.log('first load:', favorites)

  if (favorites.some((fav) => fav.id === movie.id)) {
    svg.classList.add("fill-red-400");
  } else {
    svg.classList.add("fill-white");
  }

  heartDiv.addEventListener("click", (event) => {
     favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.some((fav) => fav.id === movie.id)) {
      svg.classList.remove("fill-red-400");
      svg.classList.add("fill-white");
      deleteFromStorage(movie);
    } else {
      svg.classList.remove("fill-white");
      svg.classList.add("fill-red-400");
      addToStorage(movie);
    }
    favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  });


  wrapper.appendChild(movieImg);
  info.appendChild(movieTitle);
  info.appendChild(movieDate);
  info.appendChild(movieLang);
  wrapper.appendChild(info);
  wrapper.appendChild(heartDiv);
  section.appendChild(wrapper);
};
