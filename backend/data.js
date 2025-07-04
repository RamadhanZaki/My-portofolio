// backend/data.js
const educationHistory = [ /* ...data... */ ];
const skills = [ /* ...data... */ ];
const projects = [ /* ...data... */ ];
module.exports = { educationHistory, skills, projects };
• Buat file backend/index.js dengan kode server berikut:
JavaScript
// backend/index.js
const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

app.listen(PORT, () => {
console.log(` Server backend berjalan di http://localhost:${PORT}`);
});
• Buka backend/package.json dan atur bagian scripts:
JSON
"scripts": {
"start": "node index.js",
"dev": "nodemon index.js"
},