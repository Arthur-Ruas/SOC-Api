import express from 'express';
import userController from './controllers/userController.js';
import loginController from './controllers/loginController.js';
import teacherController from './controllers/teacherController.js';
import subjectsController from './controllers/subjectsController.js';

const routes = express();

routes.use('/register', userController);
routes.use('/login', loginController);
routes.use('/teacher', teacherController);
routes.use('/subjects', subjectsController);

export default routes;