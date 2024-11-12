import database from '../repository/mysql.js';

async function createUser(name,email,password,typeUser){
    const sql = "INSERT INTO tbl_usuario(nome,email,senha,tipo_usuario) VALUES (?,?,?,?)";

    const infoUser = [name, email, password, typeUser];

    const conn = await database.connectDB();
    await conn.query(sql, infoUser);
    conn.end();
}

async function updateUser(name,email,password,typeUser, idUser) {
    const sql = "UPDATE tbl_usuario SET nome = ?, email = ?, senha = ?, tipo_usuario= ? WHERE id_usuario = ?";

    const infoUser = [name,email,password,typeUser, idUser]

    const conn = await database.connectDB();
    await conn.query(sql, infoUser);
    conn.end();
}

async function listUser(){
    const sql = "SELECT * FROM tbl_usuario WHERE deletado = 0";

    const conn = await database.connectDB();
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}

async function listUserByTipe(tipo){
    const sql = "SELECT * FROM tbl_usuario WHERE deletado = 0 AND tipo_usuario = ?";

    const conn = await database.connectDB();
    const [rows] = await conn.query(sql, tipo);
    conn.end();
    return rows;
}

async function deleteUser(idUser){
const sql = "UPDATE tbl_usuario SET deletado = 1 WHERE id_usuario = ?"

const conn = await database.connectDB();
await conn.query(sql, idUser);
conn.end();

}


export default {createUser, updateUser, listUser, listUserByTipe, deleteUser};