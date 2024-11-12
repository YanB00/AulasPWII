import express from "express";
import routes from "./routes.js";

const server = express();

server.use(express.json());
server.use("/", routes);

const PORT = process.env.PORT || 3333;
server.listen(PORT, ()=>{
    console.log(`Meu servidor está rodando na porta ${PORT} 🛸`);
});

export default server;


