const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

var sahip = ayarlar.sahip

module.exports.run = async (client, message, args) => {

    var OGON = message.guild.members.find("id", "sizinid");
    if (message.member !== OGON) return message.channel.send("Bu komutu kullanmak için uygun izniniz yok.");
    if (OGON) {
        client.user.setStatus("online");
        message.channel.send('Durum **Çevrimiçi** olarak deðiþtirildi.');
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
    description: 'Botun Durumunu Çevrimiçi Olarak Ayarlar.',
    usage: 'durum-ayarla-cevrimici'
};
//XiR