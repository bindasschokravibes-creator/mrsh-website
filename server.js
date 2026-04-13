const express = require("express");
const path = require("path");

const app = express();

// static files
app.use(express.static(__dirname));

// home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// dashboard
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"));
});

// test
app.get("/test", (req, res) => {
    res.send("EXPRESS WORKING 💀🔥");
});

// port change (IMPORTANT)
app.listen(8080, () => {
    console.log("🔥 EXPRESS SERVER http://localhost:8080");
});
