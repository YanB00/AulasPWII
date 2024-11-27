import express from "express";
import db from "../services/loginServices.js";
import { generatePassword } from "../helpers/userFeatures.js"

const router = express.Router();

router.post('/', async (req,res)=>{
    const {email, password} = req.body;

    try{
        const users = await db.login(email,password);

        if(users.length > 0 ){
            res.status(200).send({message:'Login efetuado com sucesso'});
        }else{
            res.status(401).send({message:'Login incorreto'});
        }
    }catch(err){
        res.status(500).send({message:`Houve um erro no banco de dados. ${err}`});
    }
});

router.post('/reset', async (req,res)=>{
    const {email} = req.body;
    
    try{
        const user = await db.checkEmail(email);

        if(user.length>0){
            const newPassword = generatePassword();
            await db.changePassword(email, newPassword);
            res.status(200).send({message: `Nova Senha: ${newPassword}`});
        }else{
            res.status(404).send({message:'Usuário não encontrado'});
        }
    } catch(err){
        res.status(500).send({message:`Houve um erro no banco de dados. ${err}` });
    }
});
export default router;