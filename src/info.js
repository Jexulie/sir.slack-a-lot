class Info{

    showGuildInfo(msg){
        let response;
        let emojis = msg.guild.emojis;
        let iterator = emojis.values;
        if(emojis.size > 1){
            for(let i ; i < emojis.size; i++){
                response.push(iterator.next())
            }
        }else{
            response = "Wait... Owner ?! We Don't Have Any Emoji..."
        }
        msg.reply(`
        ${msg.guild.name} :
        Has ${msg.guild.memberCount} Slav... Ehm! Members.
        The Owner Is ${msg.guild.owner}.
        ${msg.guild.region} Is Where Its Located.

        Our Beautiful Emoji Collection:
        ${response}
        `);
    }

    showUserInfo(){
        
    }
}

export default Info;