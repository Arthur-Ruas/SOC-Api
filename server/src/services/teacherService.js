import database from '../repository/connectmysql.js';

async function createTeacher(teacherName, teacherColorCard, teacherArraySubjects, teacherNote){
  const sql = `insert into tbl_professores (nome, cor_card, observacao) 
  values(?,?,?)`;

  const dataTeacher = [teacherName, teacherColorCard, teacherNote];

  const conn = await database.connect();
  await conn.query(sql, dataTeacher);

  teacherArraySubjects.forEach(async (subject) => {
    const sql= `insert into tbl_rel_professores_materias (id_prof, id_materia) 
    values ((select max(id) from tbl_professores), ?)`

    const dataSubject = [subject];

    await conn.query(sql, dataSubject);
  });

  conn.end();
}

async function getTeacher(){

  const sql = `select
  id as Id, nome as Nome, cor_card as corCard
  from tbl_professores`

  const conn = await database.connect();
  const [rows] = await conn.query(sql);
  conn.end();
  return rows;
}

export default {createTeacher, getTeacher};
