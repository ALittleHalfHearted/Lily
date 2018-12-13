const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('If you need help, L!ask');
	//const Owner = user.id = 
});

client.on('message', message => {
	if (message.content.substring(0,2) === 'L!' && message.author.bot == false) {
		var args = message.content.substring(2).split(' ');
		var cmd = args[0];
		args = args.splice(1).toString().replace(/,/g,' ');
		
		switch(cmd){
			case 'owner':
				console.log(message.author.id);
				if(message.author.id != 220176861379035137){
					message.reply('Strangers are scary');
				}else{
					message.reply('all hail the creator');
					console.log(message.channel);
				}
			break;
			case 'ping':
				message.reply('Pong!\n\nIs a fun game, I agree.');
			break;
			case 'ask':
				switch(args){
					default:
						message.reply('The following questions are some of the most common ones people ask me'+
							      ':\n\n:one: | sample text\n:asterisk: | Suggest a question or feature!\n'+
							      'Ask your question by typing `L!ask #` and I will respond right away.\n\n' +
							      'You can also ask for various information regarding my friends and I'+
							      ' with `L!fact`. If you are more interested in a casual, polite conversation,'+
							      'I would be happy to oblige with `L!day`.');
				}
			break;
			default:
				message.reply('Sorry dear, I didn\'t quite catch that. Could you repeat yourself?');
		}
	}
})

client.login(process.env.BOT_TOKEN);
