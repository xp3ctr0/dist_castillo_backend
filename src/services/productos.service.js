const pool = require('./db');
const helper = require('../config/helper');
const config = require('../config/config');

async function getProductosService(req, res) {
    const rows = await pool.query(`SELECT * FROM PRODUCTS`);
    return helper.emptyOrRows(rows);
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
// async function createRolService(req, res) {
//     try {
//         const {name, state} = req.body;
//         const rows = await pool.query("INSERT INTO ROLES (ROL_NAME, ROL_ESTATE) VALUES (?, ?)", [name, state]);
//         res.status(201).json({name, state});
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
    getProductosService
}