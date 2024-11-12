import database from '../repository/mysql.js'

async function login(email,password) {
    const sql = 'SELECT * from tbl_usuarios WHERE email=? AND senha=?';
    const dataLogin = [email, password];

    const conn = await database.connectDB();
    const [rows] = await conn.query(sql,dataLogin);
    conn.end();

    return rows[0];
}

async function checkEmail(email) {
    const sql = 'SELECT * from tbl_usuarios WHERE email=?'; 
    const conn = await database.connectDB();

    const [rows] = await conn.query(sql,[email]);

    conn.end();

    return rows[0];
}


async function changePassword(email, newPassword) {
    const sql = 'UPDATE tbl_usuarios SET senha = ? WHERE email=?'; 
    const dataNewPass = [newPassword,email]

    const conn = await database.connectDB();
    await conn.query(sql,dataNewPass);

    conn.end();
}

export default {login, checkEmail,changePassword}