const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
    var oyun = [
        "l+otorol-aç - Otorol Güncellendi🔥",//*buraları istediğiniz gibi değiştirin !!!
        "l+küfür-engelle aç - Küfür Engel✨",
        "l+reklam-engelle aç - Reklam Engel⭐️",
        "Otomatik - Anti-SPAM 📛",
        "BlockeR %100 Türkçe ",
        "l+yavaşmod <sny> - slowmode 🌹",
        "Beni Sunucuna Ekle⚡️",
        "Sahiplerim Heratix,KaraGergedan ",
        "l+yardım - Yardım Menüsü Yenilendi😉 ",
        "ULTRA Küfür Engelle✊ ",
        "ULTRA Link Engelle👌 ",
        "Otorol - Mod LOG 👊 ",
        "Botu Kulanan Herkeze Teşşekürler ! :) l+ailemiz",
        "7/24 AKTIF !!!"
    ];

    setInterval(function () {

        var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

        client.user.setGame(oyun[random], "");
    }, 2 * 2500);

    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
    client.user.setStatus("dnd");
    client.user.setGame(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};