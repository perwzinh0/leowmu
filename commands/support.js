
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "suporte",
  description: "Obtenha o link do servidor de suporte",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/f29AHXy3nw";
      const githubLink = "https://github.com/perwzinh0";
      const replitLink = "";
      const youtubeLink = "";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Servidor de suporte',
      
              url: 'https://discord.gg/f29AHXy3nw'
          })
            .setDescription(`➡️ **Junte-se ao nosso servidor Discord para suporte e atualizações:**\n- Discord - ${supportServerLink}\n\n➡️ **Siga-nos: **\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};
