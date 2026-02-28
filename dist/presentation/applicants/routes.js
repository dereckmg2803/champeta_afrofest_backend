"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicantsRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const create_service_1 = require("./services/create.service");
class ApplicantsRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const service = new create_service_1.CreatorCommunityMemberService();
        const controller = new controller_1.ApplicantsController(service);
        router.post('/community-members', controller.createApplicant);
        router.get('/community-members', controller.getAll);
        router.get('/community-members/:id', controller.getById);
        return router;
    }
}
exports.ApplicantsRoutes = ApplicantsRoutes;
