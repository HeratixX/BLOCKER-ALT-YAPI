const fs = require ('fs')
const Discord = require('discord.js')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix



exports.run = async (bot, message, args) =>

{
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  
  	let profil = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send("Ayarlamam İçin Bir Rol Etiketlemelisin. \nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \nÖrnek Kullanım : ca!otorol @rol #kanal");
  if (message.guild.member(message.author.id).hasPermission(0x8))

    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.send("**Doğru Kullanım = ${prefix}otorol @<roladı> #<metinkanalı>**".then(msg => msg.delete(5000)));


	if(!profil[message.guild.id]){

		profil[message.guild.id] = {

			sayi: mentionedRole.id,
      kanal: mentionedChannel.id
		};
	}

	profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id

	fs.writeFile("./otorol.json", JSON.stringify(profil), (err) => {
		console.log(err)

	})

	const embed = new Discord.RichEmbed()
		.setDescription(`:white_check_mark: Otorol başarıyla ${args[0]} olarak ayarlandı! \nOtorol Mesaj kanalı başarıyla ${mentionedChannel} olarak ayarlandı.\n\nOto Rol'ü kapatabilmek için **hp!otorol-kapat** yazabilirsiniz!`)
		.setColor("RANDOM")
		.setTimestamp()
	message.channel.send({embed})
}

}



exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["setautorole", "otorol", "otoroldeğiştir"]
}

exports.help =
{
  name: 'otorol-aç',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorolayarla'
}