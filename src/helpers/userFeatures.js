import jwt from 'jsonwebtoken';
import { generatePassword } from './loginActions.js'

const secret = 'aSenh@queVoceQuiser!';


function generateToken(id_login,user_name){
    return jwt.sign({infoUser:{id_login,userName: user_name}}, secret, {expiresIn: 60*60*5});

}

export {generatePassword,generateToken};