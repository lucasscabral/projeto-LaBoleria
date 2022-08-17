import connection from "../database/db.js";

export async function insertCake(name, image, price, description) {
    await connection.query(`INSERT INTO cakes (name,image,price,description) VALUES ($1,$2,$3,$4);`, [name, image, price, description]);
}