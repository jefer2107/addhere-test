import nodemailer from "nodemailer";

const sendVerificationRequest = ({
  identifier: email,
  url,
  token,
  baseUrl,
  provider,
}: {
  identifier: string;
  url: string;
  token: string;
  baseUrl: string;
  provider: any;
}) => {
  return new Promise<void>((resolve, reject) => {
    const { server, from } = provider;

    // Strip protocol from URL and use domain as site name
    const site = baseUrl.replace(/^https?:\/\//, "");

    nodemailer.createTransport(server).sendMail(
      {
        to: email,
        from,
        subject: `Entrar em ${site} - ${new Date()}`,
        text: text({ url, site }),
        html: html({ url, site, email }),
      },
      (error) => {
        if (error) {
          //   logger.error('SEND_VERIFICATION_EMAIL_ERROR', email, error)
          return reject(
            new Error("SEND_VERIFICATION_EMAIL_ERROR" + error.message)
          );
        }
        return resolve();
      }
    );
  });
};

// Email HTML body
const html = ({
  url,
  site,
  email,
}: {
  url: string;
  site: string;
  email: string;
}) => {
  // Insert invisible space into domains and email address to prevent both the
  // email address and the domain from being turned into a hyperlink by email
  // clients like Outlook and Apple mail, as this is confusing because it seems
  // like they are supposed to click on their email address to sign in.
  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`;
  const escapedSite = `${site.replace(/\./g, "&#8203;.")}`;

  // Some simple styling options
  const backgroundColor = "#f9f9f9";
  const textColor = "#444444";
  const mainBackgroundColor = "#ffffff";
  const buttonBackgroundColor = "#FF434A";
  const buttonBorderColor = "#FF434A";
  const buttonTextColor = "#ffffff";

  // Uses tables for layout and inline CSS due to email client limitations
  return `
<body style="background: ${backgroundColor};">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
        <td align="center"><img width="300px" src="https://${site}/aplicacao_padrao.png" title="logo" /></td>
    </tr>
    <tr>
      <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        <strong>Avaliação de Transtornos de Neurodesenvolvimento</strong>
      </td>
    </tr>
  </table>
  <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        Entrar como <strong>${escapedEmail}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">ENTRAR</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        Caso você não tenha solicitado esse login, você pode excluir essa mensagem com segurança.
      </td>
    </tr>
  </table>
</body>
`;
};

// Email text body – fallback for email clients that don't render HTML
const text = ({ url, site }: { url: any; site: any }) =>
  `Entrar na ${site}\n${url}\n\n`;

export default sendVerificationRequest;
