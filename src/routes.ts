import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUserController } from "./controller/user/ListUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";

import { CreateCategoriesController } from "./controller/Category/CreateCategoriesController";
import { ListCategoriesController } from "./controller/Category/ListCategoriesController";
import { UpdateCategoriesController } from "./controller/Category/UpdateCategoriesController";
import { DeleteCategoriesController } from "./controller/Category/DeleteCategoriesController";

import { CreateSaleController } from "./controller/Sale/CreateSaleController";
import { ListSaleController } from "./controller/Sale/ListSaleController";
import { UpdateSaleController } from "./controller/Sale/UpdateSaleController";
import { DeleteSaleController } from "./controller/Sale/DeleteSaleController";

import { CreateProductController } from "./controller/Product/CreateProductController";
import { ListProductController } from "./controller/Product/ListProductController";
import { UpdateProductController } from "./controller/Product/UpdateProductController";
import { DeleteProductController } from "./controller/Product/DeleteProductController";

import { CreateClientController } from "./controller/Client/CreateClientController";
import { ListClientController } from "./controller/Client/ListClientController";
import { UpdateClientController } from "./controller/Client/UpdateClientController";
import { DeleteClientController } from "./controller/Client/DeleteClientController";
import { AuthenticationUserController } from "./controller/autentication/AuthenticationController";
import { EnsureAuthenticated } from "./middleware/ensureAutenticated";
const router = Router();



const authenticationUserController = new AuthenticationUserController();
const createUserController  = new CreateUserController();
const listUsersController  = new ListUserController();
const updateUserController  = new UpdateUserController();
const deleteUserController  = new DeleteUserController();


const createCategoriesController  = new CreateCategoriesController();
const listCategoriesController  = new ListCategoriesController();
const updateCategoriesController  = new UpdateCategoriesController();
const deleteCategoriesController  = new DeleteCategoriesController();

const createProductController  = new CreateProductController();
const listProductController  = new ListProductController();
const updateProductController  = new UpdateProductController();
const deleteProductController  = new DeleteProductController();

const createSaleController  = new CreateSaleController();
const listSaleController  = new ListSaleController();
const updateSaleController  = new UpdateSaleController();
const deleteSaleController  = new DeleteSaleController();

const createClientController  = new CreateClientController();
const listClientController  = new ListClientController();
const updateClientController  = new UpdateClientController();
const deleteClientController  = new DeleteClientController();

router.post("/users", createUserController.handle);
router.get("/users", listUsersController.handle);
router.put("/users/:id", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);

router.post("/login", authenticationUserController.handle)


router.post("/categories", createCategoriesController.handle);
router.get("/categories", listCategoriesController.handle);
router.put("/categories/:id", updateCategoriesController.handle);
router.delete("/categories/:id", deleteCategoriesController.handle);

router.post("/product", createProductController.handle);
router.get("/product", listProductController.handle);
router.put("/product/:id", updateProductController.handle);
router.delete("/product/:id", deleteProductController.handle);

router.post("/sale", createSaleController.handle);
router.get("/sale", listSaleController.handle);
router.put("/sale/:id", updateSaleController.handle);
router.delete("/sale/:id", deleteSaleController.handle);

router.post("/client", createClientController.handle);
router.get("/client", listClientController.handle);
router.put("/client/:id", updateClientController.handle);
router.delete("/client/:id", deleteClientController.handle);

export {router} 