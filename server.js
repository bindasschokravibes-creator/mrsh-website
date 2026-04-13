const express = require("express");
const path = require("path");

const app = express();

// 🔥 FORCE index.html serve
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// 🔥 test route
app.get("/test", (req, res) => {
    res.send("SERVER WORKING 🔥");
});

app.listen(3000, () => {
    console.log("🔥 SERVER RUNNING http://localhost:3000");
});
