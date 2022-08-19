import 'source-map-support/register';
import { Client, GatewayIntentBits } from 'discord.js';
import logger from './services/logger';

if (!process.env.BOT_TOKEN) {
    logger.error('No BOT_TOKEN environment variable found.');
    process.exit(1);
}
const client = new Client({
    // https://discord.com/developers/docs/topics/gateway#list-of-intents
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
        
    ],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
    
});


client.on('guildMemberAdd', (member) => {
    logger.info(`New member joined: ${member.user.tag}`);
    /**
     * TODO Actually perform the logic here
     * Log to a dedicated server channel
     * Send a welcome message to the new member with instructions on how to get started
     * The rest of the age verification logic will be handled by a slash command interaction event
     */

});
logger.info(`Registered listeners`);


client.on('error', (error) => {
    logger.error(error);
});

client.login(process.env.BOT_TOKEN);
