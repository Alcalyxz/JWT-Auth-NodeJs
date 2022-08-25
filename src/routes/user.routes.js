import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/user.controller";
import { authJwt, verifySignUp } from "../middlewars";

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExisted],
  userCtrl.createUser
);

export default router;
