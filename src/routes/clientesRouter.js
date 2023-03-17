const express = require('express');
const router = express.Router();
const {getClientes,postClientes} = require('../controllers/clientesController');

/* GET programming languages. */
// @ts-ignore
router.get("/",getClientes);
// router.get("/:id",getRol);
// router.put("/:id",updateRol);
router.post("/",postClientes);
// router.delete("/:id",deleteRol);

module.exports = router;