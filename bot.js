const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require("fs");
var contents = fs.readFileSync("package.json");
const jsonContent = JSON.parse(contents);
var DMOwner = new Discord.DMChannel();
DMOwner = jsonContent.DMChannel;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('If you need help, L!ask');
});

client.on('message', message => {
	if (message.content.substring(0,2) === 'L!' && message.author.bot == false) {
		var args = message.content.substring(2).split(' ');
		var cmd = args[0];
		args = args.splice(1);
		
		switch(cmd){
			/*case 'owner':
				console.log(message.author.id);
				if(message.author.id != DMOwner.recipient.User.id){
					message.reply('Strangers are scary');
				}else{
					message.reply('all hail the creator');
					DMOwner.send('bluh');
				}
			break;*/
			case 'ping':
				message.reply('Pong!\n\nIs a fun game, I agree.');
			break;
			case 'pp':
				let member = message.mentions.members.first();
				if(args[0].toLowerCase() == 'set'){
					member.setNote(args[2]);
					console.log(`${member} has ${member.note} Pet Points!`);
				}
				else if(args[0].toLowerCase() == 'check'){
					message.channel.send(`${member} has ${(member.note > 0) ? member.note:0} Pet Points!`);
				}
				else{
					if(Number(member.note) == NaN){
						member.setNote(1);
					}
					else{
						member.setNote(parseInt(member.note) + 1);
					}
					console.log(`${member} has ${member.note} Pet Points!`);
				}
			break;
			case 'ask':
				switch(args){
					case '1':
						message.reply('Well my dear, I am so glad you asked! The "pets" are Yashy :yhoe:, who Lucy found as an egg '+
							      'and has raised since she hatched (and is definitely not a yoshi); Blur, :yeet: the poor soul'+
							      ' with no memory of his past; and Chirpy, :chirpy: who is Yashy\'s adopted child after she '+
							      'saved Chirpy\'s egg  from a snake. (I mostly just hang around to keep an eye on everyone.)'+
							      ' We are part of the webcomic Bittersweet Candy Bowl, and for a long time we were the balancing '+
							      'forces to keep the comic from becoming too melodromatic, and sometimes I would guide the kids on the'+
							      ' right path, but after Lucy\'s... Incedent, we have been largely absent. Perhaps to allow for a more intense plotline?');
					break;
					default:
						message.reply('The following questions are some of the most common ones people ask me'+
							      ':\n\n:one: | What/who are "the pets"?\n' + //:asterisk: | Suggest a question or feature!\n'+
							      'Ask your question by typing `L!ask #` and I will respond right away.\n\n' +
							      'You can also ask for various information regarding my friends and I'+
							      ' with `L!fact`. If you are more interested in a casual, polite'+
							      ' conversation, I would be happy to oblige with `L!day`.');
				}
			break;
			case 'fact':
				message.reply(':bask: Did you know? :bask:\nThis function is a work in progress! I\'ll do a bit more research, then get back to you.');
			break;
			case 'day':
				message.reply('Today, I\'ve been rather busy with being born, I\'ll let you know when I\'ve had time to adjust.');
			break;
			default:
				message.reply('Sorry dear, I didn\'t quite catch that. Could you repeat yourself?');
		}
	}
})

client.login(process.env.BOT_TOKEN);
