const Discord = require("discord.js")

module.exports = {
    name: "botinfo",
    description: "(UTIL) Veja as infos do bot",
    type: "CHAT_INPUT",    

    run: async (client, message, args) => {

        let users = client.users.cache.size;
        let ping = client.ws.ping;
        let ownerid = "975072473970262026";
        let data = message.guild.createdAt.toLocaleDateString("pt-br");
        let owner = client.users.cache.get(ownerid);
        let prefix = "/"; 
        let version = "13.6.0";

        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor({ name: 'Informações do Bot', iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        	.setTimestamp()

        .addField('🛠️ Desenvolvedor:', `${owner.tag}`, true)
        .addField('📌 Prefixo:', `${prefix}`, true)
        .addField('⏰ Criado em:', `${data}`, true)
        .addField('🚨 Ping:', `${ping}`, true)
        .addField('👥 Usuários:', `${users}`, true)
        .addField('⚙️ Versão DiscordJS:', `${version}`, true)

        message.reply({ embeds: [embed] })



    }
}