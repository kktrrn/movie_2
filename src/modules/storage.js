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

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const updateFavoriteRating = (id, rating) => {
  const favorites = getFavorites();
  const index = favorites.findIndex((fav) => fav.id === id);
  if (index !== -1) {
    favorites[index].rating = rating;
    saveFavorites(favorites);
  }
};

export const updateFavoriteReview = (id, review) => {
  const favorites = getFavorites();
  const index = favorites.findIndex((fav) => fav.id === id);
  if (index !== -1) {
    favorites[index].review = review;
    saveFavorites(favorites);
  }
};
