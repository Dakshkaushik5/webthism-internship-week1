// 1. Import the Express library
const express = require('express');
const cors = require('cors');

// 2. Initialize the app
const app = express();
const PORT = 5000;

// 3. Enable CORS (Critical for connecting to your React frontend later)
app.use(cors());

// 4. Define the GET route specified in your deliverables
app.get('/api/hello', (req, res) => {
    // This sends the JSON object back to whoever calls this URL
    res.json({ "message": "Hello from the Backend!" });
});

// 5. Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});