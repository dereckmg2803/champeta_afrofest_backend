import { Resend } from 'resend';
import { envs } from '../../../config';
const resend = new Resend(envs.RESEND_API_KEY);
const timestamp = new Date().toLocaleString('es-CO', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/Bogota'
});
export const sendCommunityWelcomeEmail = async (
    userEmail: string,
    userName: string
) => {
    try {
        await resend.emails.send({
            from: 'Champeta AfroFest <no-reply@mail.champetaafrofest.com>', // Debe estar verificado en Resend
            to: userEmail,
            subject: '🎉 ¡Bienvenido a la Comunidad Champeta AfroFest!',
            html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          
          <!-- Header con gradiente de colores de Cartagena -->
          <tr>
            <td style="background: linear-gradient(135deg, #e63946 0%, #f4a261 25%, #2a9d8f 50%, #e9c46a 75%, #e63946 100%); padding: 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding: 30px 40px; text-align: center;">
                    <img src="https://champetaafrofest.com/logo.png" alt="Champeta AfroFest" width="180" style="max-width: 180px; height: auto; display: block; margin: 0 auto;">
                  </td>
                </tr>
                <tr>
                  <td style="background-color: rgba(0,0,0,0.2); padding: 20px 40px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                      ¡Bienvenido a la Comunidad!
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Contenido principal -->
          <tr>
            <td style="padding: 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 20px 0; color: #1a1a2e; font-size: 24px; font-weight: 600;">
                      ¡Hola ${userName}! 🎉
                    </h2>
                    <p style="margin: 0 0 20px 0; color: #4a4a4a; font-size: 16px; line-height: 1.7;">
                      <strong style="color: #e63946;">¡Gracias por unirte a la familia Champeta AfroFest!</strong> Nos emociona que hayas llenado el formulario en nuestra página web y quieras ser parte de este movimiento cultural.
                    </p>
                    <p style="margin: 0 0 25px 0; color: #4a4a4a; font-size: 16px; line-height: 1.7;">
                      Muy pronto recibirás noticias exclusivas, invitaciones a eventos y contenido especial que celebra la riqueza de la champeta y la cultura afrocaribeña.
                    </p>
                  </td>
                </tr>
                
                <!-- Video destacado -->
                <tr>
                  <td style="padding: 25px 0;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #2a9d8f 0%, #1a1a2e 100%); border-radius: 12px; overflow: hidden;">
                      <tr>
                        <td style="padding: 25px; text-align: center;">
                          <p style="margin: 0 0 15px 0; color: #ffffff; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">
                            Mira cómo vivimos el festival
                          </p>
                          <h3 style="margin: 0 0 20px 0; color: #f4a261; font-size: 20px; font-weight: 600;">
                            Champeta AfroFest Melbourne 2025
                          </h3>
                          <a href="https://www.youtube.com/watch?v=XcEEA9iwUqU" target="_blank" style="display: inline-block; background-color: #e63946; color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 50px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(230,57,70,0.4);">
                            ▶️ Ver Video
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Redes sociales -->
                <tr>
                  <td style="padding: 25px 0; text-align: center;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #fef9e7; border-radius: 12px; border-left: 4px solid #e9c46a;">
                      <tr>
                        <td style="padding: 25px;">
                          <p style="margin: 0 0 15px 0; color: #1a1a2e; font-size: 16px; font-weight: 600;">
                            📱 ¡Síguenos en Instagram!
                          </p>
                          <p style="margin: 0 0 20px 0; color: #4a4a4a; font-size: 14px; line-height: 1.6;">
                            No te pierdas ninguna actualización, detrás de cámaras y sorpresas exclusivas.
                          </p>
                          <a href="https://www.instagram.com/champetaafrofest" target="_blank" style="display: inline-block; background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: 600; font-size: 14px;">
                            @champetaafrofest
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #1a1a2e; padding: 30px 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 10px 0; color: #e9c46a; font-size: 16px; font-weight: 600;">
                      Con sabor caribeño 🌴
                    </p>
                    <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 14px;">
                      <strong>Equipo Champeta AfroFest</strong>
                    </p>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                      <tr>
                        <td style="padding: 0 8px;">
                          <span style="display: inline-block; width: 12px; height: 12px; background-color: #e63946; border-radius: 50%;"></span>
                        </td>
                        <td style="padding: 0 8px;">
                          <span style="display: inline-block; width: 12px; height: 12px; background-color: #e9c46a; border-radius: 50%;"></span>
                        </td>
                        <td style="padding: 0 8px;">
                          <span style="display: inline-block; width: 12px; height: 12px; background-color: #2a9d8f; border-radius: 50%;"></span>
                        </td>
                        <td style="padding: 0 8px;">
                          <span style="display: inline-block; width: 12px; height: 12px; background-color: #ffffff; border-radius: 50%; border: 1px solid #4a4a4a;"></span>
                        </td>
                      </tr>
                    </table>
                    <p style="margin: 20px 0 0 0; color: #888888; font-size: 12px;">
                      <a href="https://champetaafrofest.com" style="color: #f4a261; text-decoration: none;">champetaafrofest.com</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
        });

        // Copia a la empresa
        await resend.emails.send({
            from: 'Champeta AfroFest <no-reply@mail.champetaafrofest.com>',
            to: 'dexmontgarcex@gmail.com',
            subject: '📋 Nuevo miembro en la comunidad - Champeta AfroFest',
            html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f2f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f0f2f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="550" style="margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
          
          <!-- Header sutil -->
          <tr>
            <td style="background-color: #1a1a2e; padding: 20px 30px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="vertical-align: middle;">
                    <img src="https://champetaafrofest.com/logo.png" alt="Champeta AfroFest" width="120" style="max-width: 120px; height: auto; display: block;">
                  </td>
                  <td style="vertical-align: middle; text-align: right;">
                    <span style="display: inline-block; background-color: #2a9d8f; color: #ffffff; font-size: 11px; font-weight: 600; padding: 6px 14px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">
                      Nuevo Registro
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Barra de colores de Cartagena -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #e63946 0%, #e9c46a 33%, #2a9d8f 66%, #ffffff 100%);"></td>
          </tr>
          
          <!-- Contenido -->
          <tr>
            <td style="padding: 30px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 8px 0; color: #1a1a2e; font-size: 20px; font-weight: 600;">
                      Nuevo miembro en la comunidad
                    </h2>
                    <p style="margin: 0 0 25px 0; color: #6b7280; font-size: 14px;">
                      Se ha registrado un nuevo interesado desde champetaafrofest.com
                    </p>
                  </td>
                </tr>
                
                <!-- Datos del usuario -->
                <tr>
                  <td>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8fafc; border-radius: 10px; border: 1px solid #e5e7eb;">
                      <tr>
                        <td style="padding: 20px;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <!-- Nombre -->
                            <tr>
                              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                  <tr>
                                    <td style="width: 40px; vertical-align: top;">
                                      <span style="display: inline-block; width: 32px; height: 32px; background-color: #e9c46a; border-radius: 8px; text-align: center; line-height: 32px; font-size: 14px;">👤</span>
                                    </td>
                                    <td style="vertical-align: top; padding-left: 12px;">
                                      <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Nombre</p>
                                      <p style="margin: 0; color: #1a1a2e; font-size: 16px; font-weight: 600;">${userName}</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <!-- Email -->
                            <tr>
                              <td style="padding: 12px 0;">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                  <tr>
                                    <td style="width: 40px; vertical-align: top;">
                                      <span style="display: inline-block; width: 32px; height: 32px; background-color: #2a9d8f; border-radius: 8px; text-align: center; line-height: 32px; font-size: 14px;">✉️</span>
                                    </td>
                                    <td style="vertical-align: top; padding-left: 12px;">
                                      <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                                      <p style="margin: 0; color: #1a1a2e; font-size: 16px; font-weight: 600;">
                                        <a href="mailto:${userEmail}" style="color: #2a9d8f; text-decoration: none;">${userEmail}</a>
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Timestamp -->
                <tr>
                  <td style="padding-top: 20px; text-align: center;">
                    <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                      📅 Registrado el ${timestamp}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 30px; border-top: 1px solid #e5e7eb;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0; color: #6b7280; font-size: 12px;">
                      Notificación automática de <a href="https://champetaafrofest.com" style="color: #e63946; text-decoration: none; font-weight: 500;">Champeta AfroFest</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
        });

    } catch (error) {
        console.error('Error sending email:', error);
    }
};