const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var OGON = message.guild.members.find("id", "sahibinid");
    if (message.member !== OGON) return message.channel.send("Bu komutu kullanmak i�in uygun izniniz yok.");
    if (OGON) {
        client.user.setStatus("idle");
        message.channel.send('Durum **Bo�ta** olarak de�i�tirildi.');
    }


}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: 'durum-ayarla-bo�ta',
    description: 'Botun Durumunu Bo�ta Olarak De�i�tirir',
    usage: 'durum-ayarla-bo�ta'
};