import express from 'express';
//importando a rota do Points
import PointsController from './controllers/PointsController';
//importa a rota Items
import ItemsController from './controllers/ItemsController';

// Index, show, create, update, delete

const routes = express.Router();
//recebendo a rota
const pointsController = new PointsController();
const itemsController = new ItemsController();

//routes.get('/items', itemsController.index);
//routes.post('/items', itemsController.create);

// mostando a rota
routes.post('/points', pointsController.create);
//index para listar unico
//routes.get('/points/', pointsController.index);
//routes.get('/points/:id', pointsController.show);

export default routes;

// Migrations = Histórico do BD