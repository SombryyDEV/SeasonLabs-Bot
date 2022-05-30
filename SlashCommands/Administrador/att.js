const Discord = require('discord.js')

module.exports = {
    name: 'att',
    description: '(ADMIN) Comando de enviar nova atualização',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'plugin',
            description: 'Diga o nome do plugin',
            type: 'STRING',
            required: true
        },
        {
            name: 'versão',
            description: 'Diga a versão do Plugin',
            type: 'STRING',
            required: true
        },
        {
            name: 'descrição',
            description: 'Digite a descrição da Atualização',
            type: 'STRING',
            required: true,
        },
    ],
    run: async(client, interaction, args) => {
		if (!interaction.member.permissions.has("ADMINISTRADOR"));

        var channel = client.channels.cache.get('979128070839615559');
        let plugin = interaction.options.getString('plugin');
        let versão = interaction.options.getString('versão');
        let descrição = interaction.options.getString('descrição');

        let enviado = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription('OK! Atualização enviada com sucesso.')

        interaction.reply({
            embeds: [enviado],ephemeral: true
        })

        let embed1 = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setAuthor({ name: 'Nova Atualização', iconURL: 	'https://cdn.discordapp.com/attachments/979152369285758996/979518188352049192/080675eac830f2d97e3a71d2b0927bdf.png'})
        .setThumbnail('https://cdn.discordapp.com/attachments/979152369285758996/979518188352049192/080675eac830f2d97e3a71d2b0927bdf.png')
        .setTimestamp()
        .addFields(
            { name: '**Plugin:**', value: `${plugin}`, inline: true },
            { name: '**Versão:**', value: `${versão}`, inline: false },
            { name: '**Descrição:**', value: `${descrição}`, inline: true },
        )

        channel.send({
            embeds: [embed1]
        })


    }
}