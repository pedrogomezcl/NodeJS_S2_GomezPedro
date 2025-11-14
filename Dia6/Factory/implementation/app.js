/**
 Creator
  + createNotification()  <-- método fábrica
  + send(message)

EmailNotificationCreator extends Creator
  + createNotification() -> EmailNotification

SMSNotificationCreator extends Creator
  + createNotification() -> SMSNotification

 */

const {
    EmailNotificationCreator,
    WhatsAppNotificationCreator
} = require('./creators.js');

function main(){
    const emailCreator = new EmailNotificationCreator();
    const whatsappCreator = new WhatsAppNotificationCreator();

    emailCreator.send("Bienvenido al sistema");
    whatsappCreator.send("Bienvenido a Whatsapp!");
}
main();