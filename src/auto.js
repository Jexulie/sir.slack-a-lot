class Auto{

    sayWelcome(member){
        const channel1 = member.guild.channel.find('name', 'member-log')
        if(!channel1) return;
        channel1.send(`We have a new Squire now, say hi to ${member}!!`);
    }

    /**
     * 
     * prob
     */
    sayGoodBye(member){
        const channel2 = member.guild.channel.find('name', 'member-log');
        console.log(channel);
        if(!channel2) return;
        channel2.send(`Sir.${member} Left the Noble Lands... Peasant!`);
    }

    sayReconnecting(member){
        const channel2 = member.guild.channel.find('name', 'member-log');
        if(!channel2) return;
        channel2.send(`Welcome to Noble Lands Sir.${member}`)
    }

    giveMassRole(){
        
    }

}

export default Auto;