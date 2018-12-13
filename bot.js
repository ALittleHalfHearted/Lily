const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require("fs");
var contents = fs.readFileSync("package.json");
const jsonContent = JSON.parse(contents);
const DMOwner = jsonContent.DMOwner;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('If you need help, L!ask');
});

client.on('message', message => {
	if (message.content.substring(0,2) === 'L!' && message.author.bot == false) {
		var args = message.content.substring(2).split(' ');
		var cmd = args[0];
		args = args.splice(1).toString().replace(/,/g,' ');
		
		switch(cmd){
			case 'owner':
				console.log(message.author.id);
				if(message.author.id != DMOwner.recipient.User.id){
					message.reply('Strangers are scary');
				}else{
					message.reply('all hail the creator');
					DMOwner.send('bluh');
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
