import express from "express";
import db from "../services/teacherInfoService";

const routes = express.Router()

routes.get('/:id', async (request, response) => {

    const id = request.params.id;
    try {
        const teacherSubjects = await db.getTeacherSubjects(id);

        if(teacherSubjects.length > 0){
            return response.status(200).send({message: teacherSubjects})
        }
        else{
            return response.status(204).end();
        }

    } catch(err){
        response.status(500).send({message: `Erro ao buscar os dados. ${err}`});
    }
});

routes.get('/teacher/:id', async (request, response) => {

    const id = request.params.id;
    try {
        const teacherInfo = await db.getTeacherInfo(id);

        if(teacherInfo.length > 0){
            return response.status(200).send({message: teacherInfo})
        }
        else{
            return response.status(204).end();
        }

    } catch(err){
        response.status(500).send({message: `Erro ao buscar os dados. ${err}`});
    }
});

export default routes;