// import {Request, Response} from "express";
// const {createRolService, deleteRolService, getRolService, updateRolService} = require("../services/roles.service");
const handleHttp = require("../utils/error.handle");
const {
    getClientesService,createClientService
} = require("../services/clientes.service");

const getClientes = async (req, res) => {
    try {
        const responseClientes = await getClientesService(req, res);
        res.send(responseClientes);
    } catch (e) {
        handleHttp(res, "ERROR_GET_CLIENTES");
    }
}

const postClientes = async (req, res) => {
    try {
        const responsePostClient = await createClientService(req, res);
        res.send(responsePostClient);
    } catch (e) {
        handleHttp(res, "ERROR_POST_CLIENTES");
    }
}

// export {getRol, getRoles, postRol, updateRol, deleteRol}

module.exports = {getClientes,postClientes}