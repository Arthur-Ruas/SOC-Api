import express from 'express';
import userController from './controllers/userController.js';
import loginController from './controllers/loginController.js';
import teacherController from './controllers/teacherController.js';
import subjectsController from './controllers/subjectsController.js';
import scheduleController from './controllers/scheduleController.js';

const routes = express();

routes.use('/register', userController);
routes.use('/login', loginController);
routes.use('/teacher', teacherController);
routes.use('/subjects', subjectsController);
routes.use('/schedule', scheduleController);

export default routes;