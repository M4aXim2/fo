//Command which makes a webhook with link of the statuspage
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "statuspagetest",
    description: "Sends you the statuspage link",
    category: "Info",
    run: async (client, interaction, args, user, text, prefix) => {
        try {
            //things u can directly access in an interaction!
            const { member, channelId, guildId, applicationId, commandName, deferred, replied, ephemeral, options, id, createdTimestamp } = interaction;
            const { guild } = member;
            //send the webhook
            interaction.reply({
                ephemeral: true,
                embeds: [
                    new MessageEmbed()
                        .setDescription(`[**Want to see uptime of the bot? You can do it by pressing on this link!**](https://fomo.betteruptime.com/)`)
                ]
            });
        } catch (e) {
            console.log(String(e.stack).bgRed)
        }
    }
}
