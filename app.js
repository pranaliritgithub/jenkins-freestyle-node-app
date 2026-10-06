const express = require("express");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Health check
app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        application: "DevOps Cloud Application",
        server: "Node.js",
        deployment: "Jenkins Freestyle"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
