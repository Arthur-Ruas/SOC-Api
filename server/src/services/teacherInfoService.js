import database from '../repository/connectmysql.js';

async function getTeacherSubjects(id){

    const sql = `select
    tbl_rel_professores_materias.id_prof as IdProf, tbl_materias.nome as Nome 
    FROM tbl_rel_professores_materias 
    inner join tbl_professores on tbl_prof.id = tbl_rel_professores_materias.id_prof
    inner join tbl_materias on tbl_materias.id = tbl_rel_professores_materias.id_materia
    where tbl_professores.id = ?`

    const data = [id];
  
    const conn = await database.connect();
    const [rows] = await conn.query(sql, data);
    conn.end();
    return rows;
}

async function getTeacherInfo(id){

    const sql = `select
    nome as NomeProf,
    data_criacao as DataCriacao,
    observacao as Observacao
    FROM tbl_professores 
    where id = ?`

    const data = [id];
  
    const conn = await database.connect();
    const [rows] = await conn.query(sql, data);
    conn.end();
    return rows;
}

export default {getTeacherSubjects, getTeacherInfo}