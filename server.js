const express = require("express");
const path = require("path");

const app = express();

// 🔥 IMPORTANT: static files serve
app.use(express.static(__dirname));

// 👉 direct index fix
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// 👉 dashboard route
app.get("/dashboard", (req, res) => {
    res.sendFile(__dirname + "/dashboard.html");
});

app.listen(3000, () => {
    console.log("🔥 SERVER RUNNING http://localhost:3000");
});
