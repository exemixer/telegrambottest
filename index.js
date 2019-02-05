const TelegramBot = require('node-telegram-bot-api');


const TOKEN ='701183305:AAFabVlO8Mo8oPSKAc3EUb-PvP3sZRLIGc0';

const bot = new TelegramBot(TOKEN, {polling:true});

bot.on('messege', msg =>{
	bot.sendMessage(msi.chat.id, 'привет, bot says: "Привет ${msg.from.first_name}"');
});

