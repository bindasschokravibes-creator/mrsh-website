const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("HOME WORKING 💀");
});

app.get("/test", (req, res) => {
    res.send("TEST WORKING 💀🔥");
});

app.listen(4000, () => {
    console.log("SERVER RUNNING ON http://localhost:4000");
});