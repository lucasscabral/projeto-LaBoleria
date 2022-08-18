import connection from "../database/db.js";
import dayjs from "dayjs";

export async function checkCustomerExistence(cakeId) {
    const { rows: cakeIdExists } = await connection.query(`SELECT * FROM cakes WHERE id = $1`, [cakeId])
    if (cakeIdExists.length > 0) {
        return false
    }
}

export async function checksExistenceOfCake(clientId) {
    const { rows: clientIdExists } = await connection.query(`SELECT * FROM clients WHERE id = $1`, [clientId])
    if (clientIdExists.length > 0) {
        return false
    }

}

export async function insertOrders(clientId, cakeId, quantity, createdAt) {
    const { rows: cakes } = await connection.query(`SELECT * FROM cakes WHERE id = $1;`, [cakeId])

    let totalPay = cakes[0].price * quantity;
    let date = dayjs().format("YYYY-MM-DD HH:mm:ss");

    await connection.query(`INSERT INTO orders ("clientId","cakeId",quantity,"createdAt","totalPrice") VALUES ($1,$2,$3,$4,$5);`, [clientId, cakeId, quantity, date, totalPay]);

}