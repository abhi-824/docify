import { Router } from "express";
import { ce } from "../../lib/captureError";
import { addGetCall } from "./controller";
export const router = Router();
router.get("", ce(addGetCall));
export default router;
