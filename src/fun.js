import axios from 'axios';
import logger from './logger';
import auth from './auth.json';

class Fun{

    getRNDCatImg(msg){
        axios.get(`https://api.unsplash.com/photos/random?query=Cat&client_id=${auth.itoken}`)
            .then(res => {
                let url = res.data.urls.regular;
                msg.reply(`Your random Cat Picture, Enjoy... ${url}`);
            })
            .catch(e => {
                logger.error(e.response.data);
            });
    }

    getRNDDogImg(msg){
        axios.get(`https://api.unsplash.com/photos/random?query=Dog&client_id=${auth.itoken}`)
            .then(res => {
                let url = res.data.urls.regular;
                msg.reply(`Your random Dog Picture, Enjoy... ${url}`);
            })
            .catch(e => {
                logger.error(e.response.data);
            });
    }

    flipCoin(msg){
        let coin = [1,2];
        msg.reply(`*Noble Knight Flips the Coin...`);
        msg.reply(`and the result is...  ${Math.floor(Math.random()*coin.length) === 1 ? 'Heads' : 'Tails'}`);
    }

    rollDice(msg){
        let dices = [1,2,3,4,5];
        msg.reply(`*Noble Knight Rolls the Dice...`);
        msg.reply(`and the result is...  ${Math.ceil(Math.random()*dices.length)}`)
    }

    divideTeams(msg){
        let falias = /-maketeam (.*)/ig.exec(msg.content);
        let salias = /-mt (.*)/ig.exec(msg.content);
        let filtered =  falias === null ? salias : falias;
        const test = filtered[1].split(' ');
        if(test.length < 4){
            msg.reply('Sir, you need to give me atleast four names... COME ON!!!');
        }else{
            var names = filtered[1].split(' ')
            let teams = {
                first: [],
                second: []
            }
            function setTeams(arr){
                let len = arr.length;
                let numlen = names.length;
                if(len === Math.ceil(numlen / 2)){
                    for(let i in arr){
                        teams.second.push(arr[i]);
                    }
                        return null
                }
                let rnd = Math.floor((Math.random()) * len);
                if(rnd < 1){
                    rnd += 1;
                }
                teams.first.push(arr[rnd]);
                let newArr = arr.filter(n => n !== arr[rnd]);
                
                    return setTeams(newArr);
            }
            setTeams(names)
            msg.reply(`First Team: ${teams.first}, Second Team: ${teams.second}`);
        }
    }

    prod(msg){
        msg.reply('Pfff Yes, The Great Noble Knight Is Still Here...');
    }

    greet(msg){
        msg.reply('Sir Slack a-lot, warmly welcomes you little peasant...');
    }
}

export default Fun;