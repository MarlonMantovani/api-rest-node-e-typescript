import { Router } from 'express';
import {StatusCodes} from 'http-status-codes'

const router = Router();

// Define uma rota GET para o endereço principal ('/').
router.get("/", (req, res) => {
    return res.send("Olá, DEV!"); // Envia uma resposta com a mensagem "Olá, DEV!" ao cliente.
});

router.post("/teste", (req, res) => {
    console.log(req);
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

router.put("/atualizar", (req, res) => {
    console.log(req.body);
    return res.status(StatusCodes.ACCEPTED).json(req.body);
})

export {router};