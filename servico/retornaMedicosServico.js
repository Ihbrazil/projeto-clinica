import pool from "./conexao.js";

export async function retornaMedicos() {
    const conexao = await pool.getConnection();

    const medicos_tb = await conexao.query('SELECT id, nome, telefone, email, descricao FROM medicos');

    const medicos = medicos_tb[0];

    conexao.release();

    return medicos;
}