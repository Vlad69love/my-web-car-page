const express = require('express');
const path = require('path');
const app = express ();

app.use(express.static(path.join(__dirnam, 'public')));

app.get('/' (req, res) => {res.sendFile(path.join(__dirnam, 'public', index.html));});
const PORT = 3000;
app.listen(PORT, () => {console.log(`Server is running at http://localhost:#{PORT}`);});

app.get('/about', (req, res) => {res.sendFile(path.join(__dirname, 'public', 'about.html'));});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/submit', (req, res) => {
    const { name } =req.body; 
    res.send(`Hello, ${name}!`);
});