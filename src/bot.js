import Discord from 'discord.js';
import logger from './logger';
import auth from './auth.json';

import Fun from './fun';
import Auto from './auto';
import Info from './info';
import Mod from './mod';
import Permission from './permission';
import Music from './music';
import Profile from './profile';
import Util from './util';
import Search from './search';
import Reaction from './reaction';


/**
 * Bot init
 */
const bot = new Discord.Client();

const F = new Fun();
const A = new Auto();
const I = new Info();
const M = new Mod();
const Pe = new Permission();
const P = new Profile();
const Mu = new Music();
const U = new Util();
const S = new Search();
const R = new Reaction();

/**
 * Bot func
 */
bot.on('ready', () => {
    logger.info(`${bot.user.tag} Has Arrived To The Guild, Fear Not!!`);
});

bot.on('message', msg => {
    /**
     * Get Help
     */
    if(/-help/ig.test(msg.content) ||
             /-cmd/ig.test(msg.content) ||
                     /-commands/ig.test(msg.content)){
        U.showCmdList(msg);
    }
    /**
     * Greet
     */
    if(msg.content === 'hello' || msg.content === 'hi'){
        F.greet(msg);
    }
    /**
     * Check the bot if he is still there...
     */
    if(/-prod/ig.test(msg.content)){
        F.prod(msg);
    }
    /**
     * Fun
     */
    if(/-maketeam/ig.test(msg.content) || /-mt/ig.test(msg.content)){
        F.divideTeams(msg);
    }
    if(/-rolldice/ig.test(msg.content) || /-rd/ig.test(msg.content)){
        F.rollDice(msg);
    }
    if(/-flipcoin/ig.test(msg.content) || /-fc/ig.test(msg.content)){
        F.flipCoin(msg);
    }
    if(/-randomcat/ig.test(msg.content) || /-rndcat/ig.test(msg.content)){
        F.getRNDCatImg(msg);
    }
    if(/-randomdog/ig.test(msg.content) || /-rnddog/ig.test(msg.content)){
        F.getRNDDogImg(msg);
    }
    /**
     * Music
     */
    if(/-playmusic/ig.test(msg.content)){
        F.flipCoin(msg);
    }
    if(/-pausemusic/ig.test(msg.content)){
        F.flipCoin(msg);
    }
    /**
     * Mod
     */
    if(/-createchannel/ig.test(msg.content)){
        M.createChannel(msg);
    }
    if(/-memberlist/ig.test(msg.content)){
        M.showMembers(msg);
    }
    if(/-showbans/ig.test(msg.content)){
        M.showBans(msg);
    }
    if(/-leave/ig.test(msg.content)){
        M.leaveGuild(msg);
    }
    /**
     * Profile
     */

    /**
     * Util
     */
    if(/-todoadd/ig.test(msg.content)){
        U.addTodoList(msg);
    }
    
    if(/-ping/ig.test(msg.content)){
        U.showPing(msg);
    }
    /**
     * Search
     */
    if(/-searchpicture/ig.test(msg.content) || /-sp/ig.test(msg.content)){
        S.searchPicture(msg);
    }
    /**
     * Info
     */

    /**
     * Permission
     */

     /**
     * Reaction
     */
    
    if(/-test/ig.test(msg.content)){
        // console.log(msg.guild.iconURL)
        msg.reply(msg.guild.createChannel())
        // Direct msg - msg.author.sendMessage('Hello Cutey')
    }
});

bot.on('guildMemberAdd', member => {
    A.sayWelcome(member);
});

bot.on('disconnect', member => {
    A.sayGoodBye(member);
});

bot.on('reconnecting', member => {
    A.sayReconnecting(member);
});

/**
 * Bot start
 */
bot.login(auth.token);