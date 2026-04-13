const express = require("express");
const cors = require("cors");
const path = require("path");
const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 STATIC FILES FIX (IMPORTANT)
app.use(express.static(path.join(__dirname)));

const API_KEY = "YOUR_GEMINI_KEY";

// 👉 HOME ROUTE FIX
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// 👉 DASHBOARD ROUTE
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"));
});

// 👉 AI ROUTE
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
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

        res.json({ reply });

    } catch {
        res.json({ reply: "Server error" });
    }
});

app.listen(3000, () => {
    console.log("🔥 MRSH SERVER RUNNING http://localhost:3000");
});
