const Discord = require("discord.js")

module.exports =  {
    name: "ping",
    description: "(UTIL) Veja meu ping",
    type: "CHAT_INPUT",    
    
    run: async (client, interaction, args) => {

        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`š Ping Pong?\nš” Meu ping atual Ć©: \`${client.ws.ping}ms\`**.**`);

        interaction.reply({ embeds: [embed], ephemeral: true })

    }
}