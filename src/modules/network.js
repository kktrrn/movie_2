
export const getMovies = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=21ec068df2a5c774ca7f82bbda35c458&page=1"
    );
    if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);
    const data = await res.json();
     console.log(data.results);
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
