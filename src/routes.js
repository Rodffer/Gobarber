import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Teste',
    email: 'teste@teste.com',
    password_hash: '12345teste',
  });
  return res.json(user);
});

export default routes;
