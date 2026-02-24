const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:  `Bearer ${process.env.TMDB_API_KEY}`
  }
};

async function getMovie(filters = {}) {

    const {
        category = "popular",
        genre, 
        year, 
        sortBy,
    } = filters;

    let url = `https://api.themoviedb.org/3/movie/${category}?language=en-US`;

    if (year) {
        url += `&primary_release_year=${year}`;
    }

    if (sortBy) {
        url += `&sort_by=${sortBy}`;
    }

    const response = await fetch(url, options);

    const data = await response.json(); 

    return data.results || [];

}

module.exports = { getMovie };