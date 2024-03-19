import express from "express";
import db from "../services/subjectsService.js";

const routes = express.Router()

routes.get('/', async (request, response) => {
    try {
        const subjects = await db.getSubjects();

        if(subjects.length > 0){
            return response.status(200).send({message: subjects})
        }
        else{
            return response.status(204).end();
        }

    } catch(err){
        response.status(500).send({message: `Erro ao buscar os dados. ${err}`});
    }
});

export default routes;