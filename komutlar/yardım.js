const Discord = require('discord.js');
const loglar = require('../loglar.json');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`BlockeR`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`BlockeR - Yardım`, `:white_small_square: | **b*ayarlar**: Sunucunuz için Ayar Komutlarını Gösterir.!\n:white_small_square: | **b*eğlence**: Eğlenmek için bulunan komutlar!\n:white_small_square: | **b*eğlence2**: Eğlence Menüsünün Devamı!\n:white_small_square: **b*yetkili**: Sunucuyu yönetmek için gerekli olan komutlar!\n:white_small_square: | **b*kullanıcı**: Kullanıcılar için komutlar.\n:white_small_square: | **b*müzik**: Müzik ruhun gıdasıdır.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};

  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
   
