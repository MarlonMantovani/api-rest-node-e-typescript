import express from 'express'; //Express é um framework utilizado para criar servidores e APIs. import express → como vou chamar o recurso dentro do meu código; from 'express' → de onde estou importando esse recurso.

const server = express(); // Cria uma instância do servidor Express.

// Define uma rota GET para o endereço principal ('/').
server.get('/', (req, res) => {   
    return res.send('Olá, DEV!')  // Envia uma resposta com a mensagem "Olá, DEV!" ao cliente.
});



export { server };