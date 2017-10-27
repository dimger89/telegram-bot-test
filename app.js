var TelegramBot = require('node-telegram-bot-api');
var token = '438623317:AAEWmtnG4s2Y5BPYmi12gqbzVpOZqbUP4Gw';
var nameOfBot = 'AngryMotherFuckerBot';
var bot = new TelegramBot(token, {polling: true});

var messages = ['Вася', 'Братуха', 'шоты?', 'я AngryMotherFuckerBot'];
var count = 0;

bot.on('message', function (msg) {
    var chatId = msg.chat.id;

    console.log(msg);
    bot.sendMessage(chatId, messages[count%(messages.length)], {caption: `I'm a great bot!`});
    count++;
});