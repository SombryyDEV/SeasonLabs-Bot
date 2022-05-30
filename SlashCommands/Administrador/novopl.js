const Discord = require('discord.js')

module.exports = {
    name: 'plnovo',
    description: '(ADMIN) Comando de anunciar novo Plugin',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'plugin',
            description: 'Diga o nome do plugin',
            type: 'STRING',
            required: true
        },
        {
            name: 'preço',
            description: 'Diga o preço do plugin',
            type: 'STRING',
            required: true
        },
        {
            name: 'link',
            description: 'Digite o link do plugin',
            type: 'STRING',
            required: true,
        },
    ],
    run: async(client, interaction, args) => {
		if (!interaction.member.permissions.has("ADMINISTRADOR"));

        var channel = client.channels.cache.get('979128047766757376');
        let plugin = interaction.options.getString('plugin');
        let preço = interaction.options.getString('preço');
        let link = interaction.options.getString('link');

        let enviado = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription('OK! Plugin enviado com sucesso.')

        interaction.reply({
            embeds: [enviado],ephemeral: true
        })

        let embed1 = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setFooter('©️ 2022 SeasonLabs, Todos os direitos rezervados.')
        .setAuthor({ name: 'Novo Plugin', iconURL: 	'https://cdn.discordapp.com/attachments/979152369285758996/979518188352049192/080675eac830f2d97e3a71d2b0927bdf.png'})
        .setThumbnail('https://cdn.discordapp.com/attachments/979152369285758996/979518188352049192/080675eac830f2d97e3a71d2b0927bdf.png')
        .addFields(
            { name: '**Plugin:**', value: `${plugin}`, inline: true },
            { name: '**Preço:**', value: `${preço}`, inline: false },
            { name: '**Link:**', value: `${link}`, inline: true },
        )

        channel.send({
            embeds: [embed1]
        })


    }
}