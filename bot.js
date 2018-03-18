const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if(message.content.toLowerCase().includes("galra"))
               message.channel.send("The Galra will be defeated, don't you worry. The galaxy will soon be safe.")
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
