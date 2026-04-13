console.log("🔥 MRSH SERVER STARTED");

const express = require("express");
const path = require("path");

const app = express();

// ✅ static files serve (important)
app.use(express.static(path.join(__dirname)));

// ✅ home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// ✅ dashboard
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"));
});

// ✅ test route
app.get("/test", (req, res) => {
    res.send("SERVER OK 💀🔥");
});

// ❌ unknown route fix
app.use((req, res) => {
    res.send("404 NOT FOUND ❌");
});

// ✅ start server
app.listen(4000, () => {
    console.log("🚀 SERVER RUNNING: http://localhost:4000");
});
