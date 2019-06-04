const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var OGON = message.guild.members.find("id", "sahibinid");
    if (message.member !== OGON) return message.channel.send("Bu komutu kullanmak için uygun izniniz yok.");
    if (OGON) {
        client.user.setStatus("idle");
        message.channel.send('Durum **Boþta** olarak deðiþtirildi.');
    }


}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: 'durum-ayarla-boþta',
    description: 'Botun Durumunu Boþta Olarak Deðiþtirir',
    usage: 'durum-ayarla-boþta'
};