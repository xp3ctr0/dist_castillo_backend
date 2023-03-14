const express = require('express');
const router = express.Router();
const {getRoles} = require('../controllers/rolesController');

/* GET programming languages. */
console.log('si se puede');
// @ts-ignore
router.get("/",getRoles);
// router.get("/:id",getRol);
// router.put("/:id",updateRol);
// router.post("/",postRol);
// router.delete("/:id",deleteRol);

module.exports = router;