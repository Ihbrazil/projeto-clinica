import express from 'express';
import { retornaMedicos } from './servico/retornaMedicosServico.js';

const app = express();

app.get('/medicos', async (req, res) => {
    
    const medicos = await retornaMedicos();

    res.json(medicos);

});

app.listen(9000, async () => {

    let data = new Date();

    console.log('Servidor node iniciado em: ' + data);

});