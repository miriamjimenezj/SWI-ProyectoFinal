const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const indexPath = path.join(__dirname, 'index.html');


app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
