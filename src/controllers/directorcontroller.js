import express, { request, response } from "express";
import service from "../services/directorServices.js";

const route = express.Router();

route.get("/", async (request, response)=>{
    return response.status(200).send({"message":"Diretores Ativos"})
});

route.post("/", async(request,response)=>{
    const {name_director,nacionality,birthday,sex} = request.body;
    const today = new Date();
    const birthdayDate = new Date(birthday);
  
    if (birthdayDate.getFullYear() === today.getFullYear() &&
        birthdayDate.getMonth() === today.getMonth() &&
        birthdayDate.getDate() === today.getDate()) {
      return response.status(400).send({ message: "Data de nascimento não pode ser igual à data atual" });
    }

await service.createDirector(name_director,nacionality,birthday,sex)
return response.status(200).send({"message":"Diretor criado com sucesso"})

});

route.delete("/", async (request, response)=>{
    const {idDirector} = request.params;

    await service.deleteDirector(idDirector);

    return response.status(200).send({"message" : "Diretor excluido com sucesso"})

});

export default route;