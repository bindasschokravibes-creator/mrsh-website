const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"));
});

app.get("/test", (req, res) => {
    res.send("TEST WORKING 💀🔥");
});

app.listen(4000, () => {
    console.log("🚀 SERVER RUNNING: http://localhost:4000");
});