export default class Plugin1 {
  pluginName: string = "EmailPlugin";
  constructor() {}
  sendEmail(email: string, subject: string, message: string) {
    console.log(`Email: ${email}
                Subject: ${subject}
                Message; ${message}`);
  }
}
