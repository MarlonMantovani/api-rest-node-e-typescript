import express from "express"; //Express é um framework utilizado para criar servidores e APIs. import express → como vou chamar o recurso dentro do meu código; from 'express' → de onde estou importando esse recurso.
import { router } from "./routes/index.js";
import 'dotenv/config';

const server = express(); // Cria uma instância do servidor Express.

server.use(express.json());
server.use(router);

export { server };
