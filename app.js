const express = require("express");
const path = require("path");

const app = express();

// 🔥 static files (HTML, CSS)
app.use(express.static(__dirname));

// 🏠 Home page (index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// 📊 Dashboard
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"));
});

// 🧪 Test
app.get("/test", (req, res) => {
    res.send("EXPRESS WORKING 💀🔥");
});

app.listen(4000, () => {
    console.log("🔥 MRSH SERVER http://localhost:4000");
});
