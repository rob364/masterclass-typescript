interface IMailto {
    nome: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachments?: string[];
}
class EmailService {
    sendEmail(to: IMailto , message:IMailMessage) {
      console.log(`Email enviado para ${to.nome}: ${message.subject}`);
    }
}

export default  EmailService