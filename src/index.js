import 'dotenv/config'

import express  from 'express'
import cors  from 'cors'


const server = express();

server.use(cors())

server.get('/ping', (req,resp) => {
    resp.send('pong');
});

server.get('/corprimária/:cor', (req, resp) => {
    let corprimária = "vermelho" || "amarelo" || "azul";
    resp.send({
        let x = corprimária  
    })
})
        
server.listen(process.env.PORT, 
    () => console.log(`API online na porta ${process.env.PORT}`));