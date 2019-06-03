const Discord = require('discord.js');

let botid = ('BOTID') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(`${client.user.username} Eğlence Komutları`)
    .addField('Bot Sahibi : HeratixX,KaraGergedan', 'İletişim : Heratixcsgo#9224')
    .addField('b*1vs1 @kişi ', 'Arkadaşınla 1 v 1 Savaşırsın')
    .addField('b*atatürk', 'Atatürk | Gazi M.Kemal Atatürk Gifleri')//ne kadar eğlence komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('b*ahshit', 'Ah Shit here we go again ')
    .addField('b*çay', 'Çay | Milli Içeceklerden Biri Çay!')
    .addField('b*dcnitro', 'Discord Nitro | Nitro Çerçeve')
    .addField('b*fbi', 'FBI | FBI OPEN DOOR')
    .addField('b*fdans', 'Fortnite Dans | Fortnite Dans Gifleri')
    .addField('b*kafadansı', 'Hz.Yasuo | Hz.Yasuo Kafa dansı')
    .addField('b*kaçcm', 'Kaç cm ? | Malafatın Boyu')
    .addField('b*mc-ödül', 'Minecraft Ödül | Minecraft Ödülü Kazanırsın')
    .addField('b*nah <@kişi>', 'Nah Çekersin | Istediğin Kişiye Nah Çeker')
    .addField('b*stresçarkı', 'Stres Atmalık | Stres Çarkı Çevirir')
    .addField('b*tr', 'Türk Bayraklı Çerçeve | Türk Bayraklı Çerçeve Yapar')
    .addField('b*kartopu', 'Kartopu | Kartopu Savası')
    .addField('b*saat', 'Saat | Türkiye Saatini Gösterir')
    .addField('b*troll', 'Troll | Troll Gif')
    .addField('b*söv <@kişi>', 'Kişiye Söver')
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
  name: 'eğlence',
  description: '',
  usage: ''
};