const Discord = require('discord.js');

let botid = ('botid') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Sunucu Komutları`)
    .addField('b*küfür-engelle <aç-kapat>', 'Küfür Engel | Açık Olduğu Sürece Kimse Küfür Edemez')//ne kadar kullanıcı komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('b*reklam-engelle <aç-kapat>', 'Reklam Engel | Açık Olduğu Sürece Kimse Reklam Yapamaz')
    .addField('b*everyone-engelle <aç-kapat>', 'Everyone & Here Engel | Everyone & Here Yasaklar ')
    .addField('b*capslock-engelle <aç-kapat>', 'Büyük HARF Engellemeyi Açıp Kapatır.')
    .addField('b*sayaç sayı #kanal', 'Sayaç Ayarlar')
    .addField('b*davetlog', 'Kim Kimi Çağırmış Onu Gösterir.')
    .addField('b*ultrasohbettemizleyici aç-kapat', 'Ultra Sohbet Temizleyici')
    .addField('b*giriş-çıkış-ayarla #kanal', 'Resimli Hoş Geldin & Güle Güle Ayarlar!    「🚪」gelen-giden Adında Kanal Oluştursanız Daha İyisini Görürsünüz!!!!!!! ')
    .addField('b*log-ayarla #kanal', 'Mod LOG | Moderator LOG Ayarlar')
    .addField('b*otorol-aç <#rol>', 'Otomatik Rol | Yeni Kişi Geldiğinde Otomatik Rol Verir!')
    .addField('b*otorol-kapat', 'Otomatik Rol | Otomatik Rolü Kapatır!')
    .addField('b*otoyazı-kapat', 'Otomatik Yazı | Oto Rol Verildi Yazısını Kapatır')
    .addField('b*reklam-taraması', 'Reklam Taraması | Kullanıcı Ve Oynuyor Kısmında Reklam Kontrol')
    .addField('b*prefix <prefix> ', 'Prefix | Istediğiniz Ayarlayabilirsiniz.')
    .addField('b*oylama', 'Oylama Yapar.')
    .addField('b*emijilikayıt', 'Emojili Kayıt | Emojiyle Kayıt Olur')
    .addField('b*yavaşmod <saniye>', 'Yavaş Mod | Sohbet Odasına Yavaşlatır')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/BAĞLANTI) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote) `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'ayarlar',
  description: '',
  usage: 'ayarlar'
};