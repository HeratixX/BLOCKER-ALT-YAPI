const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Unlost Twich Yayınları ilgili ide bilgi verir..').then(message => {
      var espriler = ['https://thumbs.gfycat.com/InexperiencedEnchantingBird-max-1mb.gif','https://thumbs.gfycat.com/WarmFabulousIndianrhinoceros-max-1mb.gif','https://thumbs.gfycat.com/WebbedScrawnyImperialeagle-max-1mb.gif','https://thumbs.gfycat.com/OnlyHeftyArchaeopteryx-max-1mb.gif','https://thumbs.gfycat.com/GoldenTeemingAustraliankelpie-small.gif','https://i.ytimg.com/vi/BUS0YWlAKMs/maxresdefault.jpg','https://thumbs.gfycat.com/EnviousEnviousGrouse-small.gif',];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dt', 'donaldtrumpcaps', 'donald', 'trump'],
  permLevel: 0
};

exports.help = {
  name: 'twitch-gif',
  description: 'Unlost Twich Yayınları ilgili ide bilgi verir.',
  usage: 'unlost'
}; 