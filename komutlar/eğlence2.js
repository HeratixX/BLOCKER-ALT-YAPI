const Discord = require('discord.js');

let botid = ('BOTID') //bu yere botun id'sini yap��t�r�n.
//e�er botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucakt�r.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(`${client.user.username} E�lence Komutlar�`)
    .addField('Bot Sahibi : HeratixX,KaraGergedan', '�leti�im : Heratixcsgo#9224')
    .addField('YAPIM A�AMASI', 'YAPIM A�AMASI')
    
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