import express from "express";
import { generatePassword, generateToken } from "../helpers/loginActions.js";
import loginServices from "../services/loginServices.js";

const router = express.Router();

router.post('/', async (req,res)=>{
    const {email, password} = req.body;

    try{
        const login = await loginServices.login(email,password);

        const {id_usuario,nome} = login[0];

        if(login.length > 0 ){
            const token = generateToken(id_usuario,nome);
            res.status(200).send({message:token});
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
        const user = await loginServices.checkEmail(email);

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