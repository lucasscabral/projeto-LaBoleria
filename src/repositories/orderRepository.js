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

export async function insertOrders(clientId, cakeId, quantity, totalPrice) {
    let date = dayjs().format("YYYY-MM-DD HH:mm:ss");

    await connection.query(`INSERT INTO orders ("clientId","cakeId",quantity,"createdAt","totalPrice") VALUES ($1,$2,$3,$4,$5);`, [clientId, cakeId, quantity, date, totalPrice]);

}

export async function getOrders() {
    const { rows } = await connection.query(`SELECT json_build_object('id',clients.id,'name',clients.name,'address',clients.address,'phone',clients.phone) AS client,
    json_build_object('id',cakes.id,'name',cakes.name,'image',cakes.image,'price',cakes.price,'description',cakes.description,'flavour',flavours.name) AS cake,
    orders.id AS "orderId", orders.quantity , orders."createdAt" , orders."totalPrice",orders."isDelivered"  
    FROM orders
    JOIN clients 
    ON clients.id = orders."clientId"
    JOIN cakes
    ON cakes.id = orders."cakeId"
    JOIN flavours
    ON flavours.id = cakes."flavourId";`);

    return rows;
}

export async function getOrdersById(id) {
    const { rows } = await connection.query(`SELECT json_build_object('id',clients.id,'name',clients.name,'address',clients.address,'phone',clients.phone) AS client,
    json_build_object('id',cakes.id,'name',cakes.name,'image',cakes.image,'price',cakes.price,'description',cakes.description,'flavour',flavours.name) AS cake,
    orders.id AS "orderId", orders.quantity , orders."createdAt" , orders."totalPrice",orders."isDelivered"  
    FROM orders
    JOIN clients 
    ON clients.id = orders."clientId"
    JOIN cakes
    ON cakes.id = orders."cakeId"
    JOIN flavours
    ON flavours.id = cakes."flavourId"
    WHERE orders.id = $1;`, [id]);

    return rows;
}

export async function updateStatus(id) {
    await connection.query(`UPDATE orders SET "isDelivered" = true WHERE id = $1;`, [id])
}