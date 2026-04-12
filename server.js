const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "YOUR_GEMINI_KEY"; // 👈 यहाँ अपनी key डालना

app.post("/ai", async (req, res) => {
    const msg = req.body.message;

    try {
        const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: "You are a cybersecurity assistant. Answer simply: " + msg
                    }]
                }]
            })
        });

        const data = await response.json();

        res.json({
            reply: data.candidates?.[0]?.content?.parts?.[0]?.text || "No response"
        });

    } catch (err) {
        res.json({ reply: "Server error ⚠️" });
        const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "YOUR_GEMINI_KEY";

app.post("/ai", async (req, res) => {
    const msg = req.body.message;

    try {
        const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: "You are a cybersecurity expert AI assistant. Answer clearly and simply: " + msg
                    }]
                }]
            })
        });

        const data = await response.json();

        res.json({
            reply: data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI"
        });

    } catch (err) {
        res.json({ reply: "Server error ⚠️" });
    }
});

app.listen(3000, () => {
    console.log("🔥 ULTIMATE AI SERVER RUNNING on http://localhost:3000");
});
    }
});

app.listen(3000, () => {
    console.log("🔥 AI Server running on http://localhost:3000");
});
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"));
});const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const API_KEY = "YOUR_GEMINI_KEY";

// HOME PAGE
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// DASHBOARD
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"));
});

// AI ROUTE
app.post("/ai", async (req, res) => {
    const fetch = require("node-fetch");

    const msg = req.body.message;

    const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: "You are a cybersecurity assistant: " + msg
                    }]
                }]
            })
        }
    );

    const data = await response.json();

    res.json({
        reply: data.candidates?.[0]?.content?.parts?.[0]?.text || "No response"
    });
});

app.listen(3000, () => {
    console.log("🔥 AI Server running on http://localhost:3000");
});
