require("dotenv").config();

const express = require("express");
const { getMovie } = require("./services/movieSearch");

const app = express();

app.get("/api/movies", async (req, res) => {
    try {
        const movies = await getMovie(req.query);
        res.status(200).json(movies || []);
const app = express();

app.get("/api/movies", async (req, res) => {
    try {
      const movies = await getMovie(req.query);
      res.json(movies);
      console.log(process.env.TMDB_API_KEY);
    } catch (error) {
      console.error("Route Error:", error.message);
      res.status(500).json({ error: "Failed to fetch movies" });
    }
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movies" });
    }
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});