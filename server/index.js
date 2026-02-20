const express = require("express");
const { getMovie } = require("./services/movieSearch");

const app = express();

app.get("/api/movies", async (req, res) => {
    try {
        const category = req.query.category || "now_playing";
        const movies = await getMovie(category)
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movies" });
    }
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});