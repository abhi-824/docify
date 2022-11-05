import * as core from "express-serve-static-core";
import "source-map-support/register";
import "module-alias/register";
import { router } from "./routes";
export const docify = (app: core.Express) => {
    app.use("/*", router);
};
