class Mod{

    banMember(){

    }

    unBanMember(){

    }

    kickMember(){

    }

    muteMember(){

    }

    unMuteMember(){
        
    }

    purge(){

    }

    changeNick(){

    }

    giveRole(){

    }

    warnMember(){

    }

    showWarns(){
        
    }

    showMembers(msg){
        msg.guild.fetchMembers()
            .then(list => console.log(list)) // msg.reply(`Guild Member List: ${list}`) gives map fix this
            .catch(e => {
                logger.error(e);
                msg.reply(`For Some Reason I've Failed, If I am Failing Too Much Recently... Maybe It's Your Fault!`);
            });
    }

    showBans(msg){
        msg.guild.fetchBans()
        .then(list => console.log(list)) // msg.reply(`Guild Banned Member List: ${list}`) map again create acc ban him to test
        .catch(e => {
            logger.error(e);
            msg.reply(`For Some Reason I've Failed, They Are Banned Anyway Forget Them...`);
        });
    }

    createChannel(msg){
        let params = /-createchannel (.*) (.*)/ig.exec(msg.content);
        let name = params[1];
        let type = params[2];
        msg.guild.createChannel(name, type)
            .then(msg.reply(`${name} Channel Has Opened By The Most Noble Knight, Be Glad!`))
            .catch(e => {
                logger.error(e);
                msg.reply(`For Some Reason I've Failed, It Was Not A Good Name Tho...`);
            });
        
    }

    removeChannel(){
        
    }

    leaveGuild(msg){
        msg.guild.leave()
            .then(m => msg.reply(`${m} Got Kicked... lul, j/k He Said You Guys Were Boing And He Left...`))
            .catch(e => {
                logger.error(e);
                msg.reply(`For Some Reason I've Failed, Dude You Can Do This By Yourself....`);
            });
    }

}

export default Mod;