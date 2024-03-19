import database from '../repository/connectmysql.js';

async function createSchedule(scheduleName, classDivision, classModule){
  const sql = `insert into tb_horario_info (nome, divisao_turma, modulo) 
  values(?,?,?)`;

  const dataSchedule = [scheduleName, classDivision, classModule];

  const conn = await database.connect();
  await conn.query(sql, dataSchedule);

  conn.end();
}

async function getSchedules(){

    const sql = `select nome, divisao_turma, modulo from tb_horario_info`

    const conn = await database.connect();
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}

export default {createSchedule, getSchedules}