const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

var sahip = ayarlar.sahip

module.exports.run = async (client, message, args) => {

    var OGON = message.guild.members.find("id", "sizinid");
    if (message.member !== OGON) return message.channel.send("Bu komutu kullanmak i�in uygun izniniz yok.");
    if (OGON) {
        client.user.setStatus("online");
        message.channel.send('Durum **�evrimi�i** olarak de�i�tirildi.');
    }


}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: 'durum-ayarla-cevrimici',
    description: 'Botun Durumunu �evrimi�i Olarak Ayarlar.',
    usage: 'durum-ayarla-cevrimici'
};
//XiR