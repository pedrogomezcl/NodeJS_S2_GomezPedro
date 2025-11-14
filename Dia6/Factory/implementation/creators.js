//Creador: Quien decide cómo crear el producto (Creadores Concretos)

const{
    EmailNotification,
    SMSNotification,
    PushNotification,
    WhatsAppNotification
} = require('./notification.js');

//Clase base (Creator)
class NotificationCreator {
    //🔴 Factory Method 🔴
    createNotification(){
        throw new Error('Método createNotification() debe ser implementado!');
    }

    //Lógica común para todas las notificaciones
    send(message){
        const notifier = this.createNotification();
        notifier.send(message);
    }

}
//Creadores Concretos

class EmailNotificationCreator extends NotificationCreator{
    createNotification(){
        return new EmailNotification();
    }
}

class WhatsAppNotificationCreator extends NotificationCreator{
    createNotification(){
        return new WhatsAppNotification();
    }
}

module.exports= {
    NotificationCreator,
    EmailNotificationCreator,
    WhatsAppNotificationCreator
};