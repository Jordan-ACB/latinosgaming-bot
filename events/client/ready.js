const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT  } = require('../../config');
const { MessageEmbed } = require("discord.js")

module.exports = async bot => {
    console.log(`${bot.user.username} is available now!`)
    var activities = [ `GTA V RP`, `Minecraft!`, `ETS2 & ATS`], i = 0;
    setInterval(() => bot.user.setActivity(`latinosgaming.com | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),5000)
    
};
