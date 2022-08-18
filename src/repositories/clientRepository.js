import connection from "../database/db.js";

async function insertClient(name, address, phone) {
    await connection.query(`INSERT INTO clients (name,address,phone) VALUES ($1,$2,$3);`, [name, address, phone]);
}

async function getClientId(id) {
    const { rows } = await connection.query(`SELECT * 
    FROM clients
    WHERE id = $1;`, [id])
    return rows;
}

async function getOrdersByClient(id) {
    const { rows } = await connection.query(`SELECT orders.id AS "orderId", orders.quantity , orders."createdAt" , orders."totalPrice" ,cakes.name AS "cakeName" 
    FROM orders
    JOIN cakes
    ON cakes.id = orders."cakeId"
    WHERE orders."clientId" = $1;`, [id])

    return rows;
}

export { insertClient, getClientId, getOrdersByClient }