import mysql from "mysql2/promise";

async function connectDB() {
    return await mysql.createConnection({
        host:"localhost",
        user: "root",
        password:"",
        port: 3333,
        database:'cinetec2024'
    });
}

export default {connectDB};