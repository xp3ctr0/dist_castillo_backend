const db = require('./db');
const helper = require('../config/helper');
const config = require('../config/config');

// async function getMultiple(page = 1) {
//     const offset = helper.getOffset(page, config.listPerPage);
//     const rows = await db.query(
//         `SELECT *
//     FROM ROLES LIMIT ${offset},${config.listPerPage}`
//     );
//     const data = helper.emptyOrRows(rows);
//     const meta = {page};
//
//     return {
//         data,
//         meta
//     }
// }

async function getRolesService (req, res){
    const page = 1;
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT * 
    FROM ROLES LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
    // try {
    //     const [rows] = await pool.query('SELECT * FROM ROLES');
    //     res.status(201).json(rows);
    // } catch (e) {
    //     return res.status(500).json({message: "Something goes wrong"});
    // }
}

module.exports = {
    getRolesService
}