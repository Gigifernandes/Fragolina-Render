const express = require('express');
const server = express();
const path = require('path');
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.static(path.join(__dirname, 'views')));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});
server.get('/addproduto', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/addproduto.html'));
});
server.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/blog.html'));
});
server.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/contato.html'));
});
server.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});
server.get('/lojas', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/lojas.html'));
});
server.get('/produtoadm', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/produtoadm.html'));
});
server.get('/produtos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/produtos.html'));
});
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});