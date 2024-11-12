import express, { request, response } from "express";
import service from "../services/actorServices.js";

const route = express.Router();

route.get("/", async (request, response)=>{
    return response.status(200).send({"message":"Atores Ativos"})
});

route.post("/", async(request,response)=>{
    const {name_actor,nacionality,birthday,sex} = request.body;
    const today = new Date();
    const birthdayDate = new Date(birthday);
  
    if (birthdayDate.getFullYear() === today.getFullYear() &&
        birthdayDate.getMonth() === today.getMonth() &&
        birthdayDate.getDate() === today.getDate()) {
      return response.status(400).send({ message: "Data de nascimento não pode ser igual à data atual" });
    }

await service.createActor(name_actor,nacionality,birthday,sex)
return response.status(200).send({"message":"Ator criado com sucesso"})

});

route.delete("/", async (request, response)=>{
    const {idActor} = request.params;

    await service.deleteActor(idActor);

    return response.status(200).send({"message" : "Ator excluido com sucesso"})

});

export default route;