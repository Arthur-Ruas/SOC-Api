import mysql2 from 'mysql2/promise';

//mudar de acordo com o seu mysql workbench
async function connect(){
  return await mysql2.createConnection({
    host:'localhost', //<-
    port: 3306, //<-
    password: '', //<- Alterar, senha Arthur root1234
    database:'db_soc',
    user:'root', //<-
  })
}

export default {connect};