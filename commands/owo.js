const Command = require('../engine/commandClass');
const embeds = require('../util/embeds');

module.exports = class OwO extends Command
{
  constructor(client)
  {
    super(client,
    {
      alias: ['whatsthis'],
      name: 'owo',
      cateogry: 'gen4'
    });
  }

  async run(client, message, color)
  {
    const embed = await embeds.wolke('owo', color, message);

    await message.channel.send({embed});
  }
}
