// BY Frostishyper

const express = require('express');
const path = require('path');
const app = express();
const PORT = 7371;

app.use(express.static(path.join(__dirname, 'Public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

