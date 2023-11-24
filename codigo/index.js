const express = require('express')
const app = express()
const port = 3000

//=== CRIANDO ROTA DE TESTE
app.get('/', (req, res) => {
    res.send('OK');
})

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    
    let usuario = null;
    if (id == 1) usuario = { nome: 'admin', email: 'admin@admin.com' }
    else if (id == 2) usuario = { nome: 'teste', email: 'teste@teste.com' }

    if (usuario) res.send(usuario)
    else res.sendStatus(404)
})

app.listen(port, () => {
  console.log(`Iniciado ${port}`)
})