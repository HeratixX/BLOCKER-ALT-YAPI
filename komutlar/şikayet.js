const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const red = ayarlar.red;
const green = ayarlar.green;
const orange = ayarlar.orange;
const errors = require("../hatalar/hata.js");

exports.run = function(client, message, args) {
    message.delete();
    if(args[0] == "yardım"){
      message.reply("Kullanım: b*report <kullanıcı> <Sebep>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Yeni Şikayet")
    .setColor(orange)
    .addField("Şikayet Edilen Kullanıcı", `${rUser} ID: ${rUser.id}`)
    .addField("Şikayet Eden Kullanıcı", `${message.author} ID: ${message.author.id}`)
    .addField("Kanal", message.channel)
    .addField("Zaman", message.createdAt)
    .addField("Şikayet Sebebi:", rreason)
    .setThumbnail("https://cdn.pixabay.com/photo/2013/04/01/10/56/warning-98676_960_720.png");

    let reportschannel = message.guild.channels.find(`name`, "👉Reported👈🚨");
    if(!reportschannel) return message.channel.send(" 👉Reported👈🚨` İsminde Yazı Kanalı Bulamıyorum.!");
    reportschannel.send(reportEmbed);

}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'rapor',
 description: 'İstediğiniz Kişiyi Reportlarsınız.',
 usage: 'rapor'
};