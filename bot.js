const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDI0NDA0MTY0NTYzNTY2NTky.DY83JQ.mXXCftK5r9H4WLAKDmbfAqrpsaE);
