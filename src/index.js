import 'dotenv/config'

import express  from 'express'
import cors  from 'cors'


const server = express();

server.use(cors())

server.get('/ping', (req,resp) => {
    resp.send('pong');
});

server.get('/corprimaria/:cor', (req, resp) => {
    let cor = req.params.cor;
    let r1 = false;

    if(cor = "amarelo" || "azul" || "vermelho"){ 
        r1 = true;
    }

    resp.send(r1)
})

server.get('/', (req, resp) => {
    let 
})
        
server.listen(process.env.PORT, 
    () => console.log(`API online na porta ${process.env.PORT}`));