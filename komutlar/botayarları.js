const Discord = require('discord.js');

let botid = ('BOTID') //bu yere botun id'sini yap��t�r�n.
//e�er botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucakt�r.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(`${client.user.username} Bot Ayarlar�`)
        .addField('b*durum-ayarla-bo�ta', 'Botun Durumunu **Bo�ta** Olarak Ayarlar')
        .addField('b*durum-ayarla-rahats�zetme', 'Botun Durumunu **Rahats�z Etmeyin** Olarak Ayarlar')
        .addField('b*durum-ayarla-cevrimici', 'Botun Durumunu **�evrimi�i** Olarak Ayarlar')
        .addField('b*oyunde�i�', 'Botun Oyun K�sm�n� De�i�tirir')
        .addField(`� Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/BA�LANTI) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
};

exports.help = {
    name: 'botayarlar�',
    description: 'Botun Ayarlar�n� G�sterir',
    usage: 'botayarlar�'
};