import database from '../repository/mysql.js';

async function createGender(gender) {
    const sql = "INSERT INTO tbl_genero(genero) VALUES (?)";
    const infoGender = [gender];
  
    const conn = await database.connectDB();
    await conn.query(sql, infoGender);
    conn.end();
  }

  async function updateGender(genderId, newGender) {
    const sql = "UPDATE tbl_genero SET genero = ? WHERE id_genero = ?";
  
    const infoGender = [newGender, genderId];
  
    const conn = await database.connectDB();
    await conn.query(sql, infoGender);
    conn.end();
  }
  
  async function listGenders() {
    const sql = "SELECT * FROM tbl_genero WHERE deletado = 0";
  
    const conn = await database.connectDB();
    const [rows] = await conn.query(sql);
    conn.end();
  
    return rows;
  }
  
  async function deleteGender(genderId) {
    const sql = "UPDATE tbl_genero SET deletado = 1 WHERE id_genero = ?";
  
    const conn = await database.connectDB();
    await conn.query(sql, genderId);
    conn.end();
  }

export default {createGender, updateGender, listGenders, deleteGender};