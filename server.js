const express = require("express");
const cors = require("cors");
const path = require("path");
const fetch = require("node-fetch");

const app = express();

// 🔥 middleware
app.use(cors());
app.use(express.json());

// 🔥 static files (HTML, CSS)
app.use(express.static(__dirname));

// 🔑 Gemini API Key (अपना डालना)
const API_KEY = "YOUR_GEMINI_KEY";

// 🏠 Home (index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// 📊 Dashboard
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"));
});

// 🧪 Test route
app.get("/test", (req, res) => {
    res.send("SERVER WORKING 🔥");
});

// 🤖 AI route
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

    } catch (err) {
        res.json({ reply: "Server error" });
    }
});

// 🚀 PORT CHANGE (IMPORTANT)
app.listen(5000, () => {
    console.log("🔥 MRSH SERVER RUNNING http://localhost:5000");
});
