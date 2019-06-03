const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen **aç** veya **kapat** Yazmalısın!  ${ayarlar.prefix}küfürengel aç `).setColor("RED"));
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` Yetkisine Sahip Olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`kufur_${message.guild.id}`, 'acik').then(i => {
     return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Küfür Engel Başarıyla Açıldı! `Üyeleri Yasakla` Yetkisine Sahip Olanların Küfürü Engellenmicektir.').setColor("RANDOM"));
    })
  }
  if (args[0] == 'kapat') {
    db.set(`kufur_${message.guild.id}`, 'kapali').then(i => {
     return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Küfür Filtresi Başarıyla Kapatıldı.').setColor("RANDOM"));
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfür-engel'],
  kategori: "moderasyon",
  permLevel: 3
};

exports.help = {
  name: 'küfür-engelle',
  description: 'Küfür Engelleme Sistemini Açar/Kapatır.',
  usage: 'küfür-engelle'
};