import express from 'express';
import userController from './controllers/userController.js';
import loginController from './controllers/loginController.js';
import teacherController from './controllers/teacherController.js';

const routes = express();

routes.use('/register', userController);
routes.use('/login', loginController);
routes.use('/teacher', teacherController);

export default routes;