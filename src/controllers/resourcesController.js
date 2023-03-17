// import {Request, Response} from "express";
// const {createRolService, deleteRolService, getRolService, updateRolService} = require("../services/roles.service");
const handleHttp = require("../utils/error.handle");
const {
    getCitiesService,createCitiesService
} = require("../services/resources.service");

const getCities = async (req, res) => {
    try {
        const responseCities = await getCitiesService(req, res);
        res.send(responseCities);
    } catch (e) {
        handleHttp(res, "ERROR_GET_CITIES");
    }
}

const postCities = async (req, res) => {
    try {
        const responsePostCities = await createCitiesService(req, res);
        res.send(responsePostCities);
    } catch (e) {
        handleHttp(res, "ERROR_POST_CITIES");
    }
}

// export {getRol, getRoles, postRol, updateRol, deleteRol}

module.exports = {getCities,postCities}