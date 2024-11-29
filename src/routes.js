import express from "express";
import userController from "./controllers/usercontroller.js"
import directorController from "./controllers/directorcontroller.js"
import genderController from "./controllers/gendercontrollers.js"
import actorController from "./controllers/actorcontrollers.js"
import loginController from './controllers/logincontrollers.js'
import { verifyJWT } from "./middlewares/JWT.js"

const routes = express.Router();
routes.use("/user", verifyJWT ,userController);
routes.use("/director", directorController);
routes.use("/gender", genderController);
routes.use("/actor", verifyJWT, actorController);
routes.use("/login", loginController)

export default routes;
