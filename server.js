const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "YOUR_GEMINI_KEY";

app.post("/ai", async (req, res) => {
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

app.listen(3000, () => console.log("🔥 AI SERVER http://localhost:3000"));
