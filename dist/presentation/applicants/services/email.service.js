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
exports.sendCommunityWelcomeEmail = void 0;
const resend_1 = require("resend");
const config_1 = require("../../../config");
const resend = new resend_1.Resend(config_1.envs.RESEND_API_KEY);
const sendCommunityWelcomeEmail = (userEmail, userName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield resend.emails.send({
            from: 'Champeta AfroFest <no-reply@mail.champetaafrofest.com>', // Debe estar verificado en Resend
            to: userEmail,
            subject: '🔥 Bienvenido a la Comunidad Champeta AfroFest',
            html: `
        <h2>¡Hola ${userName}!</h2>
        <p>Gracias por unirte a la comunidad de Champeta AfroFest.</p>
        <p>Muy pronto recibirás noticias, eventos y contenido exclusivo.</p>
        <br/>
        <p>Con sabor caribeño,</p>
        <strong>Equipo Champeta AfroFest</strong>
      `
        });
        // Copia a la empresa
        yield resend.emails.send({
            from: 'Champeta AfroFest <no-reply@mail.champetaafrofest.com>',
            to: 'champetaafrofest@gmail.com',
            subject: 'Nuevo miembro en la comunidad',
            html: `
        <h3>Nuevo registro:</h3>
        <p><strong>Nombre:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
      `
        });
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
});
exports.sendCommunityWelcomeEmail = sendCommunityWelcomeEmail;
