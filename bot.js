const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('type L!help for commands');
});

client.on('message', message => {
	message.content = message.content.toLowerCase()
	if (message.content.substring(0,2) === 'L!' && message.author.bot == false) {
		var args = message.content.substring(2).split(' ');
		var cmd = args[0];
		args = args.splice(1).toString().replace(/,/g,' ');
		
		switch(cmd){
			case 'ping':
				message.reply('Pong!\n\nIs a fun game, I agree.');
			break;
			default:
				message.reply('Sorry dear, I didn\'t quite catch that. Could you repeat yourself?');
		}
	}
})

client.login(process.env.BOT_TOKEN);
