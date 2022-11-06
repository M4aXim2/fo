//Show in which servers the bot is in
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "servers", //the command name for the Slash Command
    category: "Owner",
    usage: "servers",
    aliases: ["serverlist"],
    description: "Shows in which servers the bot is in", //the command description for Slash Command Overview
    cooldown: 1,
    memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
    requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
    alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
    run: async (client, interaction, args, user, text, prefix) => {
        try {
            //things u can directly access in an interaction!
            const { member, channelId, guildId, applicationId, commandName, deferred, replied, ephemeral, options, id, createdTimestamp } = interaction;
            const { guild } = member;
            //send the webhook
            interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setTitle(`I am in ${client.guilds.cache.size} Servers`)
                        .setDescription(client.guilds.cache.map(guild => guild.name).join("\n"))
                ]
            });
        } catch (e) {
            console.log(String(e.stack).bgRed)
        }
    }
}
