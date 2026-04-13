const express = require("express");
const path = require("path");

const app = express();

// static files
app.use(express.static(__dirname));

// home page
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

app.listen(4000, () => {
    console.log("🔥 MRSH SERVER http://localhost:4000");
});
