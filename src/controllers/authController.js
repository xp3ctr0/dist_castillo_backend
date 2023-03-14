// import {Request, Response} from "express";
// const {createRolService, deleteRolService, getRolService, updateRolService} = require("../services/roles.service");
const handleHttp = require("../utils/error.handle");
const {verifyLogin} = require("../services/auth.service");

const doLogin = async (req, res) => {
    try {
        const responseRol = await verifyLogin(req, res);
        res.send(responseRol);
    } catch (e) {
        handleHttp(res, "ERROR_DO_LOGIN");
    }
}

module.exports = {doLogin}