const express = require('express');
const app = express();
const { educationHistory, skills, projects } = require('./data');

app.use(express.json());

app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

module.exports = app; // penting agar bisa digunakan Vercel
