const TelegramBot = require('python-telegram-bot-api');
const token = '1630057239:AAEZpaEWBKkyVOwQRf9pwHwZBmJmFIJ-VLI';

client.on('ready', () => {
    client.user.setActivity('bot en heroku', {type: 'WATCHING'});
    console.log('Listo!');
});


let prefix = process.env.FOO;

client.on('message', message => {
    if (!message.content.startsWith(prefix) || !message.guild) return;
    if (message.author.bot) return;
    
    const cont = message.content.split(' ').slice(1);
    const args = cont.join(' ');

    if (message.content.startsWith(prefix+'ping')){
        message.channel.send('pong');

    } else if (message.content.startsWith(prefix+ 'say')) {
        if (!args) return;
        message.channel.send(args);
    }
});

client.login(process.env.TOKEN);