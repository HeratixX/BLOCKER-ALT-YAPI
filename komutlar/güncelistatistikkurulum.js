const Discord = require('discord.js');


exports.run = (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
        .then(() => {
            message.channel.awaitMessages(response => response.content === 'evet', {
                max: 1,
                time: 30000,
                errors: ['time'],
            })
                .then((collected) => {
                    message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, 'voice');
                    message.guild.createChannel(`Toplam Sunucu: `, 'voice');
                    message.guild.createChannel(`Kullanıcılar: `, 'voice');
                    message.guild.createChannel(`Toplam Kanal: `, 'voice');
                    message.guild.createChannel(`Çalışma Süresi: `, 'voice');
                    message.guild.createChannel(`Ping: `, 'voice');
                    message.guild.createChannel(`Owner: `, 'voice');
                    message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, 'voice');






                    message.channel.send(`Gerekli Kanalları Oluşturdum.`);
                });
        });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
};

exports.help = {
    name: 'ikurulum',
    description: 'Güncel İstatistik Basit Kurulum',
    usage: 'ikurulum'
};