import database from '../repository/mysql.js';

async function createActor(name_actor, sex, birthday) {
  const sql = "INSERT INTO tbl_ator(nome_ator, sexo, dt_nascimento) VALUES (?, ?, ?)";

  const actorInfo = [name_actor, sex, birthday];

  const conn = await database.connectDB();
  await conn.query(sql, actorInfo);
  conn.end();
}

async function updateActor(name_actor, sex, birthday, id_actor) {
  const sql = "UPDATE tbl_ator SET nome_ator = ?, sexo = ?, dt_nascimento = ? WHERE id_ator = ?";

  const actorInfo = [name_actor, sex, birthday, id_actor];

  const conn = await database.connectDB();
  await conn.query(sql, actorInfo);
  conn.end();
}

async function listActor(id_actor) {
  const sql = "SELECT * FROM tbl_ator WHERE id_ator = ? AND deletado = false";

  const conn = await database.connectDB();
  const [rows] = await conn.query(sql, [id_actor]);
  conn.end();

  return rows[0];
}

async function deleteActor(id_actor) {
  const sql = "UPDATE tbl_ator SET deletado = 1 WHERE id_ator = ?";

  const conn = await database.connectDB();
  await conn.query(sql, [id_actor]);
  conn.end();
}

export default { createActor, updateActor, listActor, deleteActor };