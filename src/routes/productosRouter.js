const express = require('express');
const router = express.Router();
const {getProductos,postProduct} = require('../controllers/productosController');

/* GET programming languages. */
// @ts-ignore
router.get("/",getProductos);
// router.get("/:id",getRol);
// router.put("/:id",updateRol);
router.post("/",postProduct);
// router.delete("/:id",deleteRol);

module.exports = router;