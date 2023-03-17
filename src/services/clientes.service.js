const pool = require('./db');
const helper = require('../config/helper');
const config = require('../config/config');

async function getClientesService(req, res) {
    const rows = await pool.query(`SELECT CLI_ID,CLI_RESTAURANT,CLI_CONTACT,CLI_DOCUMENT,C.CIT_NAME,CLI_ADDRESS,CLI_PHONE FROM CLIENTS CL INNER JOIN CITIES C ON CLI_CITY = C.CIT_ID`);
    return helper.emptyOrRows(rows);
}

async function createClientService(req, res) {
    try {
        const {document,restaurant,contact,city,address,phone} = req.body;
        const rows = await pool.query("INSERT INTO CLIENTS (CLI_DOCUMENT, CLI_RESTAURANT, CLI_CONTACT, CLI_CITY, CLI_ADDRESS, CLI_PHONE) VALUES (?, ?,?,?,?,?)", [document,restaurant,contact,city,address,phone]);
        res.status(201).json({message:'OK'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// async function getRolService(req, res) {
//     try {
//         const {id} = req.params;
//         const rows = await pool.query(`SELECT * FROM ROLES WHERE ROL_ID = ${id}`);
//         res.status(201).json(rows);
//     } catch (e) {
//         return res.status(500).json({message: "Something goes wrong"});
//     }
// }
//
// async function createClientesService(req, res) {
//     try {
//         const {name, un} = req.body;
//         const rows = await pool.query("INSERT INTO PRODUCTS (PRO_NAME, PRO_UNIDAD_MEDIDA) VALUES (?, ?)", [name, un]);
//         res.status(201).json({message:'OK'});
//     } catch (error) {
//         return res.status(500).json({message: error.message});
//     }
// }
//
// async function updateRolService(req, res) {
//     try {
//         const {id} = req.params;
//         const {name, state} = req.body;
//         const result = await pool.query(
//             "UPDATE ROLES SET ROL_NAME = ?, ROL_ESTATE = ? WHERE ROL_ID = ?", [name, state, id]);
//         // @ts-ignore
//         if (result.affectedRows === 0) {
//             return res.status(404).json({message: "ROL not found"});
//         }
//         const rows = await pool.query("SELECT * FROM ROLES WHERE ROL_ID = ?", [id]);
//         // @ts-ignore
//         res.json(rows[0]);
//     } catch (error) {
//         return res.status(500).json({message: error.message});
//     }
// }
//
// async function deleteRolService(req, res) {
//     try {
//         const {id} = req.params;
//         const rows = await pool.query("DELETE FROM ROLES WHERE ROL_ID = ?", [id]);
//         // @ts-ignore
//         if (rows.affectedRows <= 0) {
//             return res.status(404).json({message: "ROL not found"});
//         }
//         res.status(204).json({message: "ROl eliminado"});
//     } catch (error) {
//         return res.status(500).json({message: error.message});
//     }
// }

module.exports = {
    getClientesService,createClientService
}