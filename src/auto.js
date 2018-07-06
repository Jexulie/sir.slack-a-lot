class Auto{

    sayWelcome(member){
        const channel1 = member.guild.channel.find('name', 'member-log')
        if(!channel1) return;
        channel1.send(`We have a new Squire now, say hi to ${member}!!`);
    }
    sayGoodBye(member){
        
    }

    sayReconnecting(member){
        
    }

    giveMassRole(){
        
    }

}

export default Auto;