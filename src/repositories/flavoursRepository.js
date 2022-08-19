import connection from "../database/db.js";


export async function insertFlavours(name) {
    const { rows: flavours } = await connection.query(`SELECT * FROM flavours WHERE name ILIKE $1`, [name]);

    if (flavours.length > 0) {
        return false;
    } else {
        await connection.query(`INSERT INTO flavours (name) VALUES ($1)`, [name]);
        return true;
    }
}