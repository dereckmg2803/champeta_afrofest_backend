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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const hpp_1 = __importDefault(require("hpp"));
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://champetaafrofest.com',
];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
};
class Server {
    constructor(options) {
        this.app = (0, express_1.default)();
        this.port = options.port;
        this.routes = options.routes;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            /** =======================
             *  Global Middlewares
             *  ======================= */
            this.app.use(express_1.default.json({ limit: '1mb' }));
            this.app.use(express_1.default.urlencoded({ extended: true, limit: '100kb' }));
            this.app.use((0, cors_1.default)(corsOptions));
            this.app.use((0, cookie_parser_1.default)());
            this.app.use((0, hpp_1.default)());
            this.app.disable('x-powered-by');
            this.app.use((0, helmet_1.default)());
            const limiter = (0, express_rate_limit_1.default)({
                windowMs: 15 * 60 * 1000,
                max: 20,
            });
            this.app.use(limiter);
            /** =======================
             *  Routes
             *  ======================= */
            this.app.use(this.routes);
            /** =======================
             *  Start server
             *  ======================= */
            this.app.listen(this.port, () => {
                console.log(`Server running on port ${this.port}`);
            });
        });
    }
}
exports.Server = Server;
