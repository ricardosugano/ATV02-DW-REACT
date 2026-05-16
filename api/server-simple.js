const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Armazenamento em memória
let posts = [];

// Sincronizar com API externa
app.get('/api/sync', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts = response.data;
        console.log(`✅ Sincronizado: ${posts.length} posts`);
        res.json({ message: 'Posts sincronizados com sucesso!', count: posts.length });
    } catch (error) {
        console.error('Erro na sincronização:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Listar todos os posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// Buscar post por ID
app.get('/api/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ message: 'Post não encontrado' });
    }
    res.json(post);
});

// Rota inicial
app.get('/', (req, res) => {
    res.json({ message: 'API Atividade 02 - Rodando sem MongoDB!' });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📋 Acesse: http://localhost:${PORT}`);
    console.log(`🔄 Para sincronizar: http://localhost:${PORT}/api/sync`);
    console.log(`📝 Para ver posts: http://localhost:${PORT}/api/posts`);
});