import { Router } from "express";
import * as productsCtrl from "../controllers/products.controller";
const router = Router();

import { authJwt } from "../middlewars";

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  productsCtrl.createProduct
);
router.get("/", productsCtrl.getProducts);
router.get("/:productId", productsCtrl.getProductById);
router.put(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.updateProductById
);
router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.deleteProductById
);

export default router;
