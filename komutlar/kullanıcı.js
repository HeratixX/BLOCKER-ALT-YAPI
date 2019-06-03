const Discord = require('discord.js');

let botid = ('BOTID') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(`${client.user.username} Kullanıcı Komutları`)
    .addField('b*kısalt <Link>', 'Link Kısaltma')//ne kadar kullanıcı komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('b*istatistik', 'Sunucu Bilgi')
    .addField('b*rapor <@kisi> <sebeb>', 'Kişiyi Şikayet Eder')
    .addField('b*havadurumu <Şehir>', 'Seçilen Şehrin Hava Durumu')
    .addField('b*nsfw-gif', '+18 Kanalda Porno Grafik (GIF)')
    .addField('b*hg <@kisi>', 'Resimli Hoş Geldin')
    .addField('b*davet', 'Bulunduğunuz Sunucunun Davet Linki')
    .addField('b*profil', 'Seviye System | XP Profilini Gösterir')
    .addField('b*bayraktr', 'TÜRK BAYRAĞI !')
    .addField('b*bayrakaz', 'AZERBEYCAN BAYRAĞI !')
    .addField('b*hastebin <kod|başlık>', 'Hastebin | Kod Sitesi ')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${BOTID}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/BAĞLANTI) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${BOTID}/vote) **|** [Web Sitesi]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'komutlar',
  description: '',
  usage: ''
};