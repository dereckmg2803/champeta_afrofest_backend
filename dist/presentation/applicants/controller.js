"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicantsController = void 0;
const get_all_service_1 = require("./services/get-all.service");
const get_by_id_service_1 = require("./services/get-by-id.service");
class ApplicantsController {
    constructor(creatorService, getAllService = new get_all_service_1.GetAllCommunityMembersService(), getByIdService = new get_by_id_service_1.GetCommunityMemberByIdService()) {
        this.creatorService = creatorService;
        this.getAllService = getAllService;
        this.getByIdService = getByIdService;
        this.createApplicant = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.creatorService.execute(req.body);
                res.status(201).json(result);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
        this.getAll = (_, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getAllService.execute();
            res.json(data);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.getByIdService.execute(req.params.id);
                res.json(data);
            }
            catch (error) {
                res.status(404).json({ message: error.message });
            }
        });
    }
}
exports.ApplicantsController = ApplicantsController;
