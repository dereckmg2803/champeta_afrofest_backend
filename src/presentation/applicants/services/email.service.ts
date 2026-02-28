import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendCommunityWelcomeEmail = async (
    userEmail: string,
    userName: string
) => {
    try {
        await resend.emails.send({
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
        await resend.emails.send({
            from: 'Champeta AfroFest <no-reply@mail.champetaafrofest.com>',
            to: 'champetaafrofest@gmail.com',
            subject: 'Nuevo miembro en la comunidad',
            html: `
        <h3>Nuevo registro:</h3>
        <p><strong>Nombre:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
      `
        });

    } catch (error) {
        console.error('Error sending email:', error);
    }
};