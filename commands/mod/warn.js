const { MessageEmbed } = require('discord.js')

module.exports = {
    config: {
        name: "warn",
        description: "warn members",
        usage: "m/warn <mention member/member id> [reason]",
        aliases: []
    },
    run: async (bot, message, args) => {
        let warnPermErr = new MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Lo siento, no tienes permisos para usar esto.! ❌**")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);
    
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!member) return message.reply("Mencione un miembro válido de este servidor");
        
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "(No se proporcionó ninguna razón)";
            
            member.send(`Has sido advertido por <${message.author.username}> por esta razón: ${reason}`)
            .catch(error => message.channel.send(`Lo siento <${message.author}> No pude advertir debido a : ${error}`));
            let warnEmbed = new MessageEmbed()
            .setTitle("**__Informe de advertencia__**")
            .setColor('#ff1616')
            .setDescription(`**<@${member.user.id}> ha sido advertido por <@${message.author.id}>**`)
            .addField(`**Razón:**`, `\`${reason}\``)
            .addField(`**Acción:**`, `\`Warn\``)
            .addField(`**Moderador:**`, `${message.author}`)

            message.channel.send(warnEmbed)

    }
}