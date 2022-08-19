import connection from "../database/db.js";

export async function getFlavourById(flavourId) {
    const { rows: flavour } = await connection.query(`SELECT * FROM flavours WHERE id = $1`, [flavourId]);
    return flavour
}

export async function insertCake(name, image, price, description, flavourId) {
    const { rows: cakes } = await connection.query(`SELECT * FROM cakes WHERE name ILIKE $1`, [name])
    if (cakes.length > 0) {
        return false
    }

    await connection.query(`INSERT INTO cakes (name,image,price,description,"flavourId") VALUES ($1,$2,$3,$4,$5);`, [name, image, price, description, flavourId]);

    return true
}