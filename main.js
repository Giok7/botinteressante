const Discord = require('discord.js')

const prefix = '!';

const client = new Discord.Client(
    { intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES'] }
)

client.on('message', message => {
    if(message.content.startsWith(`${prefix}ping`)) {
       message.channel.send('Pong');
    } else if (message.content.startsWith(`${prefix}beep`)) {
       message.channel.send('boop');
    } else if (message.content.startsWith(`${prefix}server`)) {
       message.channel.send(`Il nome del server è ${message.guild.name} \nI membri del server sono ${message.guild.memberCount}`);
    } else if (message.content.startsWith(`${prefix}username`)) {
       message.channel.send(`Il tuo nickname è ${message.author.username} \nIl tuo ID è ${message.author.id}`)
    } 
})

client.login('OTkwMjA4NjEyMDM3MTkzNzU4.GCcuKb.4DB0ZEP2DJUmDoULEuf2ofVwJhSRYnSLMJY7iI')
