const express = require("express");
const path = require("path");

const app = express();

// 🔥 STATIC FILES SERVE
app.use(express.static(path.join(__dirname)));

// 🏠 HOME
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// 📊 DASHBOARD
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"));
});

// 🧪 TEST
app.get("/test", (req, res) => {
    res.send("EXPRESS WORKING 💀🔥");
});

// 🚀 PORT (8080 SAFE PORT)
app.listen(8080, () => {
    console.log("🔥 EXPRESS SERVER http://localhost:8080");
});
