const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmMwMzkyMzEwMjc5YWI3YjczODJlNWVkNmRiMjc2ZiIsIm5iZiI6MTc3MTU4OTc2MC4yNDk5OTk4LCJzdWIiOiI2OTk4NTA4MDUyMDUxNjNlMGFhNzJhYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-JIzyxtkDi27bBh4nEqtVpBLadSO0YrUU0qGzXNRAHc'
  }
};

async function getMovie(category= "now_playing") {

    const url = `https://api.themoviedb.org/3/movie/${category}`;

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getMovie };