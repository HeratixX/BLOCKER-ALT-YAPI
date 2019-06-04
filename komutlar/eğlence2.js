const Discord = require('discord.js');

let botid = ('BOTID') //bu yere botun id'sini yap��t�r�n.
//e�er botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucakt�r.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(`${client.user.username} E�lence Komutlar�`)
    .addField('b*fdans', 'Fortnite Dans | Fortnite Dans Gifleri')
    .addField('b*kafadans�', 'Hz.Yasuo | Hz.Yasuo Kafa dans�')
    .addField('b*ka�cm', 'Ka� cm ? | Malafat�n Boyu')
    .addField('b*mc-�d�l', 'Minecraft �d�l | Minecraft �d�l� Kazan�rs�n')
    .addField('b*nah <@ki�i>', 'Nah �ekersin | Istedi�in Ki�iye Nah �eker')
    .addField('b*stres�ark�', 'Stres Atmal�k | Stres �ark� �evirir')
    .addField('b*tr', 'T�rk Bayrakl� �er�eve | T�rk Bayrakl� �er�eve Yapar')
    .addField('b*kartopu', 'Kartopu | Kartopu Savas�')
    .addField('b*saat', 'Saat | T�rkiye Saatini G�sterir')
    .addField('b*troll', 'Troll | Troll Gif')
    .addField('b*s�v <@ki�i>', 'Ki�iye S�ver') 
    .addField(`� Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'e�lence2',
  description: '',
  usage: ''
};