interface EmailTo {
  name: string;
  email: string;
}

interface EmailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

//?: significa opcional

interface MessageDto {
  to: EmailTo;
  message: EmailMessage;
}
//Dto - data transfer object (DDD)

interface EmailService {
  sendMail(request: MessageDto): void;
}

class EmailService implements EmailService {
  sendMail({ to, message }: MessageDto) {
    console.log(`Email enviado para ${to.name} : ${message.subject}`);
  }
}

export default EmailService;
