import database from '../repository/connectmysql.js';

async function getTeacherSubjects(id){

    const sql = `SELECT 
    tb_profMaterias.id_prof as IdProf, tb_materias.nome as Nome 
    FROM tb_profMaterias 
    inner join tb_prof on tb_prof.id = tb_profMaterias.id_prof
    inner join tb_materias on tb_materias.id = tb_profMaterias.id_materia
    where tb_prof.id = ?`

    const data = [id];
  
    const conn = await database.connect();
    const [rows] = await conn.query(sql, data);
    conn.end();
    return rows;
}

async function getTeacherInfo(id){

    const sql = `SELECT 
    nome as NomeProf,
    dataCriacao as DataCriacao,
    observacao as Observacao
    FROM tb_prof 
    where id = ?`

    const data = [id];
  
    const conn = await database.connect();
    const [rows] = await conn.query(sql, data);
    conn.end();
    return rows;
}

export default {getTeacherSubjects, getTeacherInfo}