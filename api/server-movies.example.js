const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// ⚠️ COLOQUE SUA API KEY AQUI (copie este arquivo para server-movies.js)
const TMDB_API_KEY = 'SUA_API_KEY_AQUI';

// ... resto do código igual ao server-movies.js