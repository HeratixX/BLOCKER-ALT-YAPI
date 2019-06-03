const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('👉TURK-AZ <33 👊👈 ')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://lh6.googleusercontent.com/proxy/tkjbfHR7n1iMob42gJCTijE97KhPp986xh0OE07IB5ko9N-PKK_O8PnqfN3QgCDZBEDl9bTBJh51HgRbG11pc6Yfwb87eD1L-NH_OBErWx6if94mxf7TmyTrxw=w500-h268-nc`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bayraktr',
  description: 'Türk BAYRAĞI !',
  usage: 'bayraktr'
};