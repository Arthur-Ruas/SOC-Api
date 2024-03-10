import database from '../repository/connectmysql.js';

async function createUser(userEmail, idEtec, userLogin, userPassword){
  const sql = `insert into tb_user (email, cod_etec, login, senha) 
  values(?,?,?,?)`;

  const dataUser = [userEmail, idEtec, userLogin, userPassword];

  const conn = await database.connect();
  await conn.query(sql, dataUser);
  conn.end();
}

export default {createUser};