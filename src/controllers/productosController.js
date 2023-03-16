// import {Request, Response} from "express";
// const {createRolService, deleteRolService, getRolService, updateRolService} = require("../services/roles.service");
const handleHttp = require("../utils/error.handle");
const {
    getProductosService
} = require("../services/productos.service");

const getProductos = async (req, res) => {
    try {
        const responseProductos = await getProductosService(req, res);
        res.send(responseProductos);
    } catch (e) {
        handleHttp(res, "ERROR_GET_PRODUCTOS");
    }
}

// export {getRol, getRoles, postRol, updateRol, deleteRol}

module.exports = {getProductos}