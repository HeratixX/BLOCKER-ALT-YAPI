 const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`:x:\`aç\` veya \`kapat\` yazmalısın.`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`:x Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.`)
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'acik').then(i => {
      message.channel.send(`**Artık biri selam verince bot cevap verecek.**`)
    })
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali').then(i => {
      message.channel.send(`**:x:** **Artık biri selam verince bot cevap vermeyecek.**`)
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa','as'],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Botun pingini gösterir.',
  usage: 'sa-as'
};