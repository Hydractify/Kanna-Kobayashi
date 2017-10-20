const Command = require('../../structures/Command');

class SayCommand extends Command {
	constructor(handler) {
		super(handler, {
			aliases: ['echo'],
			coins: 0,
			description: 'Let the bot say something.',
			examples: ['say Hello world!'],
			exp: 0,
			name: 'say',
			usage: 'say <...Message>'
		});
	}

	run(message, [first], { commandName }) {
		if (!first) return message.reply('you need to give me something to say!');

		// Clean content to avoid mentions and such (everyone and here are disabled per client options)
		const content = message.cleanContent.slice(message.cleanContent.indexOf(commandName) + commandName.length);

		return message.channel.send(content);
	}
}

module.exports = SayCommand;
