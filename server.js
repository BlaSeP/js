const { Client, MessageEmbed  } = require("discord.js");
const client = new Client();

client.on('ready', () => {
  console.log(`Listardo ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '>meme') {
    msg.reply('na amigo alta flojera');
  }

});

client.on("guildMemberAdd", miembro =>{
   var = client.channels.find(channel => channel.id === ("768114285753794600"));
   canal.send("Wenas, :emojis2: Bienvenido a TSTC<@" + miembro.id + ">")
});

client.on("message", message =>{
	if (message.content ===("-embed")){
		const embed = new MessageEmbed()
		.setTitle(" :ok_hand: Info del servidor :ok_hand: ")
		.setAuthor(message.member.displayName, message.author.displayAvatarURL,());
         message.channel.send(embed)
	}
});


 
client.login('Nzc2MDc4MDQxMDUwNjQ0NDky.X6vo_w.DRrt1Kcy2sfbaWkgm-eddm_eCV0');