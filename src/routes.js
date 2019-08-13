import { Router } from 'express';

const routes = new Router();

routes.get('/start', (req, res) =>
  res.status(200).send({ message: 'Im alive!' })
);

export default routes;
