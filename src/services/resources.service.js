const pool = require('./db');
const helper = require('../config/helper');
const config = require('../config/config');

async function getCitiesService(req, res) {
    const rows = await pool.query(`SELECT * FROM CITIES`);
    return helper.emptyOrRows(rows);
}

async function createCitiesService(req, res) {
    try {
        const {name} = req.body;
        const rows = await pool.query("INSERT INTO CITIES (CIT_NAME) VALUES (?)", [name]);
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
    getCitiesService,createCitiesService
}