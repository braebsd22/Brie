const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hug',
    description: 'Hug mentioned member.',
    execute: async (client, message, args) => {
        const mentioned = message.mentions.users.first();

        var sentences = [
            `${message.author} embraces ${mentioned} close to them.`,
            `${message.author} holds ${mentioned} tightly.`,
            `${message.author} gives ${mentioned} a big hug~`,
            `${message.author} grabs onto ${mentioned} and hugs them.`,
            `${message.author} opens their arms to ${mentioned} to give a big huggie~`
          ];

          var random = sentences[Math.floor(Math.random()*sentences.length)];

        if (!message.mentions.users.size) {
            return message.channel.send('Tag a member to hug them.');
        }

        if (message.author === mentioned) {
            return message.channel.send(`${message.author} hugs themselves... You'll be alright 💕`);
        }
        if (mentioned === client.user) {
            return message.channel.send('Awww, *huggieeeeez*');
        }

		const url = await fetch('https://nekos.life/api/v2/img/hug')
			.then(response => response.json())
			.then(body => body.url);
            let embed = new MessageEmbed()
            .setColor('#363942')
            .setDescription(`${random}`)
            .setImage(url)
            message.channel.send(embed);
}
}