import connection from "../database/db.js";

export async function insertCake(name, image, price, description) {
    const { rows: cakes } = await connection.query(`SELECT * FROM cakes WHERE name ILIKE $1`, [name])
    if (cakes.length > 0) {
        return false
    }

    await connection.query(`INSERT INTO cakes (name,image,price,description) VALUES ($1,$2,$3,$4);`, [name, image, price, description]);

    return true
}