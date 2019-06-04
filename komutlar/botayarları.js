const Discord = require('discord.js');

let botid = ('BOTID') //bu yere botun id'sini yapýþtýrýn.
//eðer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktýr.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(`${client.user.username} Bot Ayarlarý`)
        .addField('b*durum-ayarla-boþta', 'Botun Durumunu **Boþta** Olarak Ayarlar')
        .addField('b*durum-ayarla-rahatsýzetme', 'Botun Durumunu **Rahatsýz Etmeyin** Olarak Ayarlar')
        .addField('b*durum-ayarla-cevrimici', 'Botun Durumunu **Çevrimiçi** Olarak Ayarlar')
        .addField('b*oyundeðiþ', 'Botun Oyun Kýsmýný Deðiþtirir')
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/BAÐLANTI) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
};

exports.help = {
    name: 'botayarlarý',
    description: 'Botun Ayarlarýný Gösterir',
    usage: 'botayarlarý'
};