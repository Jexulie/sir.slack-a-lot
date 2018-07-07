class Util {

    constructor() {
        this.todoList = [{
            member: "Chubby Muffin",
            todolist: [
                {
                    text: "Buy Battlefield V",
                    done: false
                },
                {
                    text: "Get a new Mouse",
                    done: true
                }
            ]
        }]
    }

    addTodoList() {
        
    }

    showTodoList() {

    }

    getAvatarURL(msg, bot) {
        var user  = /-getavatar (.*)/ig.exec(msg.content);
        var name = user[1];
        var url = bot.users.find('username', name);
        console.log(url)
        msg.reply(`${user[1]}'s avatar -> ${url.avatar}`);
    }

    showCmdList(msg) {
        let time = new Date().getHours();
        let greet = time < 7 || time >= 21 ?
            'Good Night' : time >= 7 && time < 12 ?
            'Good Morning' : time >= 12 && time < 18 ?
            'Good Afternoon' : time >= 18 && time < 21 ?
            'Good Evening' : 'Good Day';
        let help = `
        ${greet} Guild Member! 🖖

        I Am The Great Sir. Slack-a-lot.

            You Can Use These Commands To Call Me:

            # FUN

                (-)maketeam <names> (mt) [List names and Sir.Slack-a-lot divides them in to two different teams. Completely Random... 🤔]

                (-)rolldice (rd) [Sir.Slack-a-lot rolls a dice for you. 🎲]

                (-)flipcoin (fc) [Sir.Slack-a-lot flips a coin for you. 💰]

                (-)randomcat (rndcat) [Sir.Slack-a-lot fetches a random cat image. For Cat Lovers. 🐱]

                (-)randomdog (rnddog) [Sir.Slack-a-lot fetches a random dog image. For Dog Lovers. 🐶]

            # MUSIC

            # MOD

            # PROFILE

            # SEARCH

                (-)searchpicture <search> (sp) [Sir.Slack-a-lot fetches the image you requested. Don't expect much though. 😅]
                
            # INFO

            # PERMISSIONS

            # REACTION

            # MISC

                (-)help (cmd, commands) [Get a list of commands.]

                (-)prod [To check if bot is still online.]

        Do Not Overuse Me or I'll Kick You ...
        `;
        msg.reply(help);
    }

    showPing(msg) {
        msg.reply(`Your Ping is ${msg.author.client.ping}ms...`);
    }

    addCustomAFKMsg() {

    }

    // needs fixing
    sendDM(msg, bot){
        let content = /-senddm (.*) (.*)/ig.exec(msg.content);
        let to = content[1].trim();
        let fid = bot.users.find('username', to);
        let id = fid.user.id;
        let message = content[2].trim();
        
        msg.author.sendMessage(`${msg.author.username} said: ${message}`);
    }

}

export default Util;