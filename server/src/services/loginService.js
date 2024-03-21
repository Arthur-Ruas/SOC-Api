import database from '../repository/connectmysql.js';

async function handleLogin(idEtec, userLogin, userPassword) {
    const sql = 'select * from tbl_usuarios where cod_etec = ? and login = ? and senha = ?'

    const dataLogin = [idEtec, userLogin, userPassword];

    const conn = await database.connect();
    const [rows] = await conn.query(sql, dataLogin);

    conn.end();
    return rows;
}

export default {handleLogin};