class Auto{

    sayWelcome(member){
        const channel = member.guild.channels.find('name', 'General')
        if(!channel) return;
        channel.send(`We have a new Squire now!!`);
    }
    sayGoodBye(member){
        
    }

    sayReconnecting(member){
        
    }

    giveMassRole(){
        
    }

}

export default Auto;