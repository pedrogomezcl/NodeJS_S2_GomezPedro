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
    EmailNotificationCreator
} = require('./creators.js');

function main(){
    const emailCreator = new EmailNotificationCreator();

    emailCreator.send("Bienvenido al sistema");
}
main();