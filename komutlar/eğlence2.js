const Discord = require('discord.js');

let botid = ('BOTID') //bu yere botun id'sini yapýþtýrýn.
//eðer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktýr.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(`${client.user.username} Eðlence Komutlarý`)
    .addField('b*fdans', 'Fortnite Dans | Fortnite Dans Gifleri')
    .addField('b*kafadansý', 'Hz.Yasuo | Hz.Yasuo Kafa dansý')
    .addField('b*kaçcm', 'Kaç cm ? | Malafatýn Boyu')
    .addField('b*mc-ödül', 'Minecraft Ödül | Minecraft Ödülü Kazanýrsýn')
    .addField('b*nah <@kiþi>', 'Nah Çekersin | Istediðin Kiþiye Nah Çeker')
    .addField('b*stresçarký', 'Stres Atmalýk | Stres Çarký Çevirir')
    .addField('b*tr', 'Türk Bayraklý Çerçeve | Türk Bayraklý Çerçeve Yapar')
    .addField('b*kartopu', 'Kartopu | Kartopu Savasý')
    .addField('b*saat', 'Saat | Türkiye Saatini Gösterir')
    .addField('b*troll', 'Troll | Troll Gif')
    .addField('b*söv <@kiþi>', 'Kiþiye Söver') 
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'eðlence2',
  description: '',
  usage: ''
};