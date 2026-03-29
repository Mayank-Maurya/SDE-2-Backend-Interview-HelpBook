import { Router } from "express";
import getUsers from "../controllers/fetch_user_controller.js";

const router = Router();

router.get("/", getUsers);

export default router;