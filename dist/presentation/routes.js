"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./applicants/routes");
// import { AuthMiddleware } from "./common/middlewares/auth.middleware";
// import { UserRole } from "../data";
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        // Rutas de aplicantes
        router.use("/api", routes_1.ApplicantsRoutes.routes);
        // Puedes agregar más rutas aquí, como la de los doctores si es necesario
        // router.use("/api/v1/doctors", DoctorRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
