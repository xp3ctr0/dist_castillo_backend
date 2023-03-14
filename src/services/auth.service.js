const pool = require('./db');
const helper = require('../config/helper');

async function verifyLogin(req, res) {
    try {
        const {document, pwd} = req.body;
        const rows = await pool.query(`SELECT COUNT(*) AS CANTIDAD FROM USERS WHERE USE_DOCUMENT = '${document}' AND USE_PASSWORD = '${pwd}' AND USE_ESTATE = 1`);
        if (rows[0].CANTIDAD === 0) {
            return res.status(404).json({message:"Credenciales incorrectas"});
        }
        res.status(201).json({message:"OK"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = {verifyLogin}