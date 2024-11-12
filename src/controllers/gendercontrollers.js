import express, { request, response } from "express";
import service from "../services/genderServices.js"

const route = express.Router();

route.get("/", async (request, response)=>{
    return response.status(200).send({"message":"Generos listados"})
});

route.post ("/", async (request, response)=>{
    const {gender} = request.body;

    if (gender.length > 45) {
        return response.status(400).send({ message: "Gênero não pode exceder 45 caracteres." });
    }
await service.createGender(gender);
return response.status(201).send({"message":"Genero cadastrado com sucesso"})
});

route.get("/:tipoGenero", async (request, response)=>{
    const tipo = await service.listGenders();
    const genders = await service.listGenders(tipo);

    return response.status(200).send({"message":"generos"})

});


route.delete("/", async (request, response)=>{
    const {idGender} = request.params;

    await service.deleteGender(idGender);

    return response.status(200).send({"message" : "Genero excluido com sucesso"})

});

export default route;
      