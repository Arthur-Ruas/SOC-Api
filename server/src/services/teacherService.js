import database from '../repository/connectmysql.js';

async function createTeacher(teacherName, teacherColorCard, teacherArraySubject, teacherNote){
  const sql = `insert into tb_prof (nome, corCard, observacao) 
  values(?,?,?)`;

  const dataTeacher = [teacherName, teacherColorCard, teacherNote];

  const conn = await database.connect();
  await conn.query(sql, dataTeacher);

  teacherArraySubject.forEach(async (subject) => {
    const sql= `insert into tb_profMaterias (id_prof, id_materia) 
    values ((select max(id) from tb_prof), ?)`

    const dataSubject = [subject];

    await conn.query(sql, dataSubject);
  });

  conn.end();
}

async function getTeacher() {

  const sql = `select
  id as Id, nome as Nome, corCard as corCard
  from tb_prof`

  const conn = await database.connect();
  const [rows] = await conn.query(sql);
  conn.end();
  return rows;
}

export default {createTeacher, getTeacher};
