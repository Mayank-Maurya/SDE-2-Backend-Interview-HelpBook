import { Router } from "express";
import { getUsers } from "../controllers/users_controller.ts";

const router = Router();

router.get("/users", getUsers);

export default router;