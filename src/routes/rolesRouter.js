const express = require('express');
const router = express.Router();
const {getRoles,deleteRol,postRol,updateRol,getRol} = require('../controllers/rolesController');

/* GET programming languages. */
// @ts-ignore
router.get("/",getRoles);
router.get("/:id",getRol);
router.put("/:id",updateRol);
router.post("/",postRol);
router.delete("/:id",deleteRol);

module.exports = router;