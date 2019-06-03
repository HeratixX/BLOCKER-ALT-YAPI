const Discord = require('discord.js');

let botid = ('BOTID') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Yetkili Komutları`)
    .addField('b*giriş-çıkış-ayarla #kanal ', '<--- Bu Şekilde Yaparak Resimli Hoş Geldin Ayarbilirsiniz !! :)  ^_^')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${BOTID}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${BOTID}/vote) **|** [Yapımcı INSTAGRAM](https://www.instagram.com/heratixcsgo/?hl=tr)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'resimlihggayarlama',
  description: '',
  usage: 'resimlihggayarlama'
};