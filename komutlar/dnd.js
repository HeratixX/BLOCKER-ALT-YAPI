const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    
var OGON = message.guild.members.find("id", "SAHIBIN İD");
if(message.member !== OGON)return message.channel.send("Bu komutu kullanmak için uygun izniniz yok.");
if(OGON) {
client.user.setStatus("dnd");
message.channel.send('Durum **Rahatsız Etmeyin** olarak değiştirildi.');
}


}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'dnd',
  description: 'Rastgele tavşan resmi gönderir.',
  usage: 'dnd'
};
//XiR