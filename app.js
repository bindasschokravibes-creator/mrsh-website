const express = require("express");
const path = require("path");

const app = express();

// static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// dashboard page
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"));
});

// test route
app.get("/test", (req, res) => {
    res.send("TEST WORKING 💀🔥");
});

// start server
app.listen(4000, () => {
    console.log("🚀 SERVER RUNNING: http://localhost:4000");
});
