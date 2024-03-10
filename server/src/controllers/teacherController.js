import express from "express";
import db from "../services/teacherService.js"
const routes = express.Router()

routes.post('/', async (request, response) => {
    const {teacherName, teacherColorCard, teacherArraySubject, teacherNote} = request.body;

    //const user =
    await db.createTeacher(teacherName, teacherColorCard, teacherArraySubject, teacherNote);

})

routes.get('/', async (request, response) => {
    try {
        const teacher = await db.getTeacher();

        if(teacher.length > 0){
            return response.status(200).send({message: teacher})
        }
        else{
            return response.status(204).end();
        }

    } catch(err){
        response.status(500).send({message: `Erro ao buscar os dados. ${err}`});
    }
});

export default routes;