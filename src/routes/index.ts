import { Router } from "express";
import getRouter from "./get";
export const router = Router();

router.get("/*", getRouter);
