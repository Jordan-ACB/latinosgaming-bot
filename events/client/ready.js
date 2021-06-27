const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT  } = require('../../config');
const { MessageEmbed } = require("discord.js")

module.exports = async bot => {
    console.log(`${bot.user.username} is available now!`)
    var activities = [ `Phoenix RP`, `Mentes!` ], i = 0;
    setInterval(() => bot.user.setActivity(`PhoenixRP | ${activities[i++ % activities.length]}`, { type: "PLAYING" }),5000)
    
};
