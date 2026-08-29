const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/gethello", (req, res) => {
    res.send("Hello NodeJS!!");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});