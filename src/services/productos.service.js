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
async function createProductService(req, res) {
    try {
        const {name, un} = req.body;
        const rows = await pool.query("INSERT INTO PRODUCTS (PRO_NAME, PRO_UNIDAD_MEDIDA) VALUES (?, ?)", [name, un]);
        res.status(201).json({message:'OK'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

async function updateProductService(req, res) {
    try {
        const {id,name, un,stock,state} = req.body;
        const result = await pool.query(
            "UPDATE PRODUCTS SET PRO_NAME = ?, PRO_UNIDAD_MEDIDA = ?, PRO_STOCK = ?, PRO_ESTATE = ? WHERE PRO_ID = ?", [name, un,stock,state,id]);
        // @ts-ignore
        if (result.affectedRows === 0) {
            return res.status(404).json({message: "ROL not found"});
        }
        const rows = await pool.query("SELECT * FROM PRODUCTS WHERE PRO_ID = ?", [id]);
        // @ts-ignore
        res.status(201).json({message:'OK'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
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
    getProductosService,createProductService,updateProductService
}