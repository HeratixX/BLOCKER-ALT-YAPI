  const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('BOTID') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Müzik Komutları🎶`)
    .addField('b*oynat <müzik-link> ', 'Müzik Açar🎵')
    .addField('b*durdur', 'Çalan Müziği KAPATIR🔇')
    .addField('b*duraklat', 'Çalan Müziği Durdurur🔇')
    .addField('b*devam', 'Duraklatılmış Müziği Devam Ettirir🎵')
    .addField('b*çalan', 'Çalan Müziği Gösterir🎵')
    .addField('b*ses <miktar>', 'Çalan Müziğin Sesini Ayarlar🔊🔉')
    .addField('b*kuyruk', 'Müzik Sırasını Gösterir🎵')
    .addField('b*radyo <1,2,3,4,5,6>', 'Radyo Açar 📟')
    .addField('Bot Sahibi :  Heratixcsgp,KaraGergedan', '.')
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
  name: 'müzik',
  description: '',
  usage: 'müzik'
};