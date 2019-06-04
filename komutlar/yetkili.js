const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix


let botid = ('BOTID') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Yetkili Komutları`)
    .addField('b*ban <@kisi>', 'Kişiyi Banlar | Kuralları Çiğneyen BANLANIR')
    .addField('b*sa-as <aç-kapat>', 'Selam Vermeyi Açıp Kapatır.') 
    .addField('b*kick <@kisi>', 'Kişiyi Sunucudan Atar | Sunucudan Uyarma Amaçlı Atar')
    .addField('b*kilit sny', 'Yazdığınız Kanal Kilitlenir')
    .addField('b*banlist', 'Ban Listesi | Banlı Kişilerin Listesi')
    .addField('b*mute <@kişi> <sebep>', 'Kişiyi Susturur | Küfür Ederse Agzını Tıka!')
    .addField('b*ssustur <@kisi><sebeb>', 'Süreli Susturur s saniye m dakika h saat y yıl')
    .addField('b*unmute <@kişi>', 'Kişinin Susturması Kalkar | Ağzı Tıkalıysa Kalkar')  
    .addField('b*temizle', 'Temizleyici | Sohbet Kanalları Temizler MAX 5000')
    .addField('b*çekiliş', 'Çekiliş | Çekiliş Yapar')
    .addField('b*oylama <isim>', 'Oylama Yapar')
    .addField('b*ikurulum', 'Gelişmiş İstatistik Kurar | NasılKurulur.md Oku')
    .addField('b*yazı-kanal-aç', 'Metin Kanalı Oluşturur')
    .addField('b*ses-kanal-aç', 'Ses Kanalı Oluşturur')
    .addField('b*sustur-rol-ayarla', 'Sustur Rolü Belirler')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote) **|** [Web Sitesi]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'yetkili',
  description: '',
  usage: 'yetkili'
};