"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicantsRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const controller_1 = require("./controller");
const create_service_1 = require("./services/create.service");
class ApplicantsRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const upload = (0, multer_1.default)();
        const service = new create_service_1.CreatorCommunityMemberService();
        const controller = new controller_1.ApplicantsController(service);
        router.post('/applicants', upload.single('cv'), controller.createApplicant);
        router.get('/applicants', controller.getAll);
        router.get('/applicants/:id', controller.getById);
        return router;
    }
}
exports.ApplicantsRoutes = ApplicantsRoutes;
