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
exports.UploadCVService = void 0;
const storage_1 = require("@google-cloud/storage");
require("dotenv/config");
const env_var_1 = require("env-var");
const storage = new storage_1.Storage();
const bucket = storage.bucket((0, env_var_1.get)("GCS_BUCKET_NAME").required().asString());
const UploadCVService = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const fileName = `cvs/${Date.now()}-${file.originalname}`;
    const blob = bucket.file(fileName);
    const stream = blob.createWriteStream({
        contentType: file.mimetype,
        resumable: false
    });
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
        throw new Error('File too large');
    }
    if (file.mimetype !== 'application/pdf') {
        throw new Error('Only PDF files are allowed');
    }
    stream.end(file.buffer);
    return `gs://${(0, env_var_1.get)('GCS_BUCKET_NAME').required().asString()}/${fileName}`;
});
exports.UploadCVService = UploadCVService;
