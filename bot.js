const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("galra"))
               message.channel.send("They will be defeated, don't you worry. The galaxy will soon be safe.")
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
