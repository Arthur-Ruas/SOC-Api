import express from "express";
import db from "../services/scheduleServices.js";

const routes = express.Router();

routes.post('/', async (request, response) => {
    const {scheduleName, classDivision, classModule} = request.body;

    await db.createSchedule(scheduleName, classDivision, classModule);

});

routes.get('/', async (request, response) => {
    try {
        const schedule = await db.getSchedules();

        if(schedule.length > 0){
            return response.status(200).send({message: schedule})
        }
        else{
            return response.status(204).end();
        }
      
    } catch(err){
        response.status(500).send({message: `Erro ao buscar os dados. ${err}`});
    }
});

export default routes;