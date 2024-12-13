export const addToStorage = (movie) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.push(movie);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const deleteFromStorage = (movie) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const index = favorites.findIndex((fav) => fav.id === movie.id);
  favorites.splice(index, 1);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
