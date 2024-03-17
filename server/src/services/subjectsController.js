import database from '../repository/connectmysql.js';

async function getSubjects(){

    const sql = "select * from tb_materias where id_modulo = 1" 
  
    const conn = await database.connect();
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
  
}

export default {getSubjects}