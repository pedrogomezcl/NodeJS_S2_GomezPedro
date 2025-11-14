// Productos : Lo que se crea (las notificaciones: EmailNotification , SMSNotification, etc)
class Notification{
    send(message){
        throw new error ("Método send() deberá ser implementado en las subclases");
    }
}

class EmailNotification extends Notification{
    send(message){
        console.log(`Enviando email: ${message}`);
    }
}

class SMSNotification extends Notification{
    send(message){
        console.log(`Enviando SMS: ${message}`);
    }
}

class PushNotification extends Notification{
    send(message){
        console.log(`Enviando Notificación Push: ${message}`);
    }
}
// Nuevo producto - Whatsapp
class WhatsAppNotification extends Notification{
    send(message){
        console.log(`Enviando WhatsApp: ${message}`);
    }
}

module.exports = {
    Notification,
    EmailNotification,
    SMSNotification,
    PushNotification,
    WhatsAppNotification
};