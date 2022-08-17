import connection from "../database/db.js";

async function insertClient(name, address, phone) {
    await connection.query(`INSERT INTO clients (name,address,phone) VALUES ($1,$2,$3);`, [name, address, phone]);
}


export { insertClient }