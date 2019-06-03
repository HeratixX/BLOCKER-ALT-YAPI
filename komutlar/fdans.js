const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/5dZYGtl3ZRzvlKMEWH/giphy.gif","https://media.giphy.com/media/t6m9zWk7jurrEMRkZf/giphy.gif","https://media.giphy.com/media/NsBjgqR8jBy2mMptZF/giphy.gif","https://media.giphy.com/media/iMBEVqJRJkEQC5EGa2/giphy.gif","https://media.giphy.com/media/2wVvQPkkR7s1XYWQoa/giphy.gif","https://media.giphy.com/media/8rEkRLlwek9jVqRhgk/giphy.gif","https://media.giphy.com/media/cNDb41n8Xv7C5j6hOO/giphy.gif","https://media.giphy.com/media/7OW9vrhBgADQ2sLT7f/giphy.gif","https://media.giphy.com/media/8cPKnTGZKDmiMShWEO/giphy.gif","https://media.giphy.com/media/8cPKnTGZKDmiMShWEO/giphy.gif","https://media.giphy.com/media/65VBy9Ccvyww9or9IR/giphy.gif","https://media.giphy.com/media/8j3CTd8YJtAv6/giphy.gif"];


    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Fortnite Dansları:")
        .setColor("#FF69B4")
        .setFooter(`${message.author.username} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['fortnitedans'],
    permLevel: 0
};

exports.help = {
    name: 'fdans',
    description: 'Rastgele dans görüntüleri atar.',
    usage: 'fdans'
};