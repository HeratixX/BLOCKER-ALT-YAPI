const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (message.author.id !== ayarlar.sahip) return message.channel.send(`Capslock engelleme adl� komutu kullanabilmek i�in, siteyi ziyaret ediniz.`)
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:fire: Yeterli yetki, bulunmamakta!`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`:fire: Capslock engelleme sistemi, kapat�ld�!`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`:fire: Capslock engelleme sistemi, aktif!`)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslock-engel'],
  permLevel: 3
};
exports.help = {
  name: 'capslock-engelle',
  category: 'Moderasyon komutlar�!',
  description: 'Capslock kullan�m�n� engeller.',
  usage: 'capslock-engelle'
};