import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar informação
// POST = Criando uma informação nova
// PUT  = Editando ume informação
// DELETE = Deletar uma informação

// Query Params: http://localhost:3333/users?search=tiago&
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body:         http://localhost:3333/users/1 (Identificar um recurso)

// O backend é acessado pelo localhost:3333
app.listen(3333)

// Drive nativo, query builder, ORM (Object Relational Mapping)

