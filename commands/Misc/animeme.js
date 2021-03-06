const { RichEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'animeme',
    description: 'Get random anime memes',
    execute: async (client, message, args) => {

        if(message.author.bot) return;
        if(message.channel.type !== "text") return;
        // The subreddit to fetch from.
        randomPuppy('animemes')
                  .then(url => {
                      const embed = new RichEmbed()
                      .setTitle(`Anime Meme`)
                      .setImage(url)
                      .setColor('#363942')
                   return message.channel.send({ embed });
            })
}
}