const express = require("express");
const cors = require("cors");
const path = require("path");
const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const API_KEY = "YOUR_GEMINI_KEY"; // यहाँ अपनी key डालना

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Dashboard page
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"));
});

// 🔥 AI Route
app.post("/ai", async (req, res) => {
    try {
        const msg = req.body.message;

        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: "You are a helpful cybersecurity assistant. Reply simply: " + msg
                        }]
                    }]
                })
            }
        );

        const data = await response.json();

        const reply =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No response from AI";

        res.json({ reply });

    } catch (err) {
        res.json({ reply: "Server error ❌" });
    }
});

// 💬 Feedback system (simple)
let feedbacks = [];

app.post("/feedback", (req, res) => {
    const fb = req.body.feedback;
    feedbacks.push(fb);
    res.json({ status: "saved" });
});

app.get("/feedback", (req, res) => {
    res.json(feedbacks);
});

app.listen(3000, () => {
    console.log("🔥 MRSH SERVER RUNNING http://localhost:3000");
});
