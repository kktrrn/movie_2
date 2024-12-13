import { getMovies } from "./modules/network.js";
import { renderMovie } from "./modules/ui.js";

(async function initializeApp() {
  const popularMovies = await getMovies();
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  popularMovies.forEach((movie) => {
    renderMovie(movie);
  });

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = searchInput.value.trim().toLowerCase();

    const section = document.getElementById("cards");
    const message = document.getElementById("cardsHeader");

    section.innerHTML = "";

    if (query === "") {
      message.textContent = "Popular movies";
      message.style.display = "block";

      popularMovies.forEach((movie) => {
        renderMovie(movie);
      });
    } else {
      const filteredMovies = popularMovies.filter(
        (movie) =>
          (movie.title && movie.title.toLowerCase().includes(query)) ||
          (movie.overview && movie.overview.toLowerCase().includes(query))
      );

      if (filteredMovies.length === 0) {
        message.textContent = "No matches found";
        message.style.display = "block";
      } else {
        message.textContent = "Search results";
        message.style.display = "block";

        filteredMovies.forEach((movie) => {
          renderMovie(movie);
        });
      }
    }

    searchInput.value = "";
  });
})();
